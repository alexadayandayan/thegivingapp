import sqlite3 from "./sqlite3";

async function getQuery(query: string): Promise<any> {
  return new Promise((resolve, reject) => {
    sqlite3.database.get(query, (err: Error, val: any) => {
      if (err) {
        return reject(err);
      }
      resolve(val);
    });
  });
}

async function getAllQuery(query: string): Promise<any> {
  return new Promise((resolve, reject) => {
    sqlite3.database.all(query, (err: Error, val: any) => {
      if (err) {
        return reject(err);
      }
      resolve(val);
    });
  });
}

async function otherQuery(query: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    sqlite3.database.run(query, (err: Error, _val: any) => {
      if (err) {
        return reject(err);
      }
      resolve("Success");
    });
  });
}

export { getQuery, getAllQuery, otherQuery };
