import { app } from "electron";
import path from "node:path";
import sqlite3 from "sqlite3";

// Initializing a new database
const filename = path.join(app.getPath("userData"), "tga-db.sqlite3");
const db = new sqlite3.Database(filename, (err: Error | null) => {
  if (err) console.error("Database opening error: ", err);
});

export const database: sqlite3.Database = db;

export default {
  database: db,
};
