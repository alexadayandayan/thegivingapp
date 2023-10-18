import { app, BrowserWindow, ipcMain } from "electron";
import { getQuery } from "./query";
import path from "node:path";
import bcrypt from "bcryptjs";
import { getCurrentUser, isLoggedIn, login, logout } from "./store";

///////////////////////////////////// IPC HANDLERS //////////////////////////////
ipcMain.on("isLoggedIn", async (event) => {
  const isLog = await isLoggedIn();
  event.returnValue = isLog;
});

ipcMain.on("getCurrentUser", async (event, _args) => {
  const user = await getCurrentUser();
  event.returnValue = user;
});

// Invoke
ipcMain.handle("login", async (_event, args) => {
  const q = `SELECT * FROM Users WHERE Username = '${args.username}'`;
  const data = await getQuery(q);
  if (comparePassword(args?.password, data?.Password)) {
    //Save to localstorage
    return await login(data);
  }
});

ipcMain.on("logout", async () => {
  return await logout();
});

ipcMain.handle("users", async (_event: any, _args: any) => {
  const q = `SELECT * FROM Users`;
  const data = await getQuery(q);
  return await login(data);
});

////////////////////////////////////////////////////////////////////////////////

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      sandbox: false,
    },
    width: 900,
    height: 900,
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

///////////////////////////////////////////////////////////////////////////////////

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", async () => {
  if (process.platform !== "darwin") {
    await logout();
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(createWindow);

const comparePassword = (password: string, hash: string) => {
  try {
    // Compare password
    return bcrypt?.compareSync(password, hash);
  } catch (error) {
    console.log(error);
  }

  // Return false if error
  return false;
};
