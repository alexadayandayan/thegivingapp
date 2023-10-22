import { ipcMain } from "electron";
import { getAllQuery, getQuery, otherQuery } from "../query";

const MemberApi = () => {
  ipcMain.handle("getMembers", async (_event) => {
    const q = `SELECT * FROM Members`;
    const data = await getAllQuery(q);
    return data;
  });

  ipcMain.handle("getMemberById", async (_event, id) => {
    const q = `SELECT * FROM Members WHERE Id='${id}'`;
    const data = await getQuery(q);
    return data;
  });

  ipcMain.handle("createMember", async (_event, args) => {
    const q = `INSERT INTO Members (Firstname, Lastname, Email, Address, Phone, DateOfBirth, IsActive, IsDeleted, Gender, Image) VALUES
        ('${args.firstname}', '${args.lastname}', '${args.email}', '${args.address}', '${args.phone}', '${args.dateOfBirth}', '${args.isActive}', '${args.isDeleted}', '${args.gender}', '${args.image}' )`;
    return await otherQuery(q);
  });

  ipcMain.handle("updateMember", async (_event, args) => {
    const q = `UPDATE Members 
            SET Firstname = '${args.firstname}',
            Lastname = '${args.lastname}',
            Email = '${args.email}',
            Address = '${args.address}',
            Phone = '${args.phone}',
            DateOfBirth = '${args.dateOfBirth}',
            IsActive = '${args.isActive}',
            Gender = '${args.gender}'
            WHERE Id = '${args.id}'`;
    return await otherQuery(q);
  });

  ipcMain.handle("deleteMember", async (_event, id) => {
    const q = `DELETE FROM Members WHERE Id = '${id}';`;
    const data = await otherQuery(q);
    return data;
  });
};

export { MemberApi };
