import { ipcMain } from "electron";
import bcrypt from "bcryptjs";
import { getQuery } from "../query";
import { getCurrentUser, isLoggedIn, login, logout } from "../store";

function LoginApi() {
  // Invoke
  ipcMain.handle("login", async (_event, args) => {
    const q = `SELECT
                u.*,
                r.RoleName AS Role 
                FROM Users u
                JOIN Roles r ON u.RoleId  = r.Id
                WHERE u.Username = '${args.username}'`;

    const data = await getQuery(q);
    if (comparePassword(args?.password, data?.Password)) {
      //Save to localstorage
      return await login(data);
    }
  });

  ipcMain.on("isLoggedIn", async (event) => {
    const isLog = await isLoggedIn();
    event.returnValue = isLog;
  });

  ipcMain.on("getCurrentUser", async (event) => {
    const user = await getCurrentUser();
    event.returnValue = user;
  });

  ipcMain.on("logout", async () => {
    return await logout();
  });
}

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

export { LoginApi };
