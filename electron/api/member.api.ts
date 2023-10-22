import { ipcMain } from "electron";
import { getAllQuery, getQuery, otherQuery } from "../query";
import { IMemberFormState } from "@/Data/member";

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

  ipcMain.handle("updateMember", async (_event, args: { id: string; member: IMemberFormState }) => {
    const q = `UPDATE Members 
            SET Firstname = '${args.member.firstname}',
            Lastname = '${args.member.lastname}',
            Email = '${args.member.email}',
            Address = '${args.member.address}',
            Phone = '${args.member.phone}',
            DateOfBirth = '${args.member.dateOfBirth}',
            IsActive = '${args.member.isActive}',
            Gender = '${args.member.gender}'
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
