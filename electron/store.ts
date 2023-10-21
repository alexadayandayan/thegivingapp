import { IUser } from "@/Data/user";
import Store from "electron-store";

const store = new Store();

const isLoggedIn = async (): Promise<boolean> => {
  return store.get("isLoggedIn") as boolean;
};

const login = async (user: IUser) => {
  store.set("isLoggedIn", true);
  store.set("currentUser", user);
  return true;
};

const logout = async () => {
  store.delete("isLoggedIn");
  store.delete("currentUser");
};

const getCurrentUser = async (): Promise<IUser> => {
  return store.get("currentUser") as IUser;
};

export { isLoggedIn, login, logout, getCurrentUser };
