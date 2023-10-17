import Store from "electron-store";

const store = new Store();

const isLoggedIn = async (): Promise<any> => {
    return store.get("isLoggedIn");
};

const login = async (user: string) => {
    console.log("Login!");
    store.set("isLoggedIn", true);
    store.set("user", user);
    return true;
};

const logout = async () => {
    console.log("Logout!");
    store.delete("isLoggedIn");
    store.delete("user");
};

const getUser = async (): Promise<any> => {
    return store.get("user");
};

export {
    isLoggedIn,
    login,
    logout,
    getUser
};