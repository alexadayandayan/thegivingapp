import sqlite3 from "./sqlite3";

async function getQuery(query: any): Promise<any> {
    return new Promise((resolve, reject) => {
        sqlite3.database.get(query, (err: Error, val: any) => {
            if (err) {
                return reject(err);
            }
            resolve(val);
        });
    });
}

export { getQuery };