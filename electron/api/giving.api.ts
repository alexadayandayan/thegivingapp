import { ipcMain } from "electron";
import { getAllQuery, getQuery, otherQuery } from "../query";
import { IOfferingFormState } from "@/Data/giving";

const GivingApi = () => {
  ipcMain.handle("getOfferings", async (_event) => {
    const q = `SELECT
          C.Id as Id,
          M.Firstname,
          M.Lastname,
          M.Gender,
          C.Tithe,
          C.BuildingFund,
          C.BestGift,
          C.GiftForPastor,
          C.GiftForBrother,
          C.Youth,
          C.FlowerOrPlants,
          C.FEBC700,
          C.Dance,
          C.Music,
          C.Meralco,
          C.ChildrensMinistry,
          C.Others,
          C.Total,
          C.EntryDate
        FROM
          Giving AS C
        INNER JOIN Members AS M ON
          C.MemberId = M.Id;`;
    const data = await getAllQuery(q);
    return data;
  });

  ipcMain.handle("getOfferingById", async (_event, id) => {
    const q = `SELECT
      C.Id as Id,
      M.Firstname,
      M.Lastname,
      M.Gender,
      C.Tithe,
      C.BuildingFund,
      C.BestGift,
      C.GiftForPastor,
      C.GiftForBrother,
      C.Youth,
      C.FlowerOrPlants,
      C.FEBC700,
      C.Dance,
      C.Music,
      C.Meralco,
      C.ChildrensMinistry,
      C.Others,
      C.Total,
      C.EntryDate
    FROM
      Giving AS C
      INNER JOIN Members AS M ON
      C.MemberId = M.Id
        WHERE C.Id = '${id}'`;
    const data = await getQuery(q);
    return data;
  });

  ipcMain.handle(
    "updateOffering",
    async (_event, args: { id: string; giving: IOfferingFormState }) => {
      const q = `UPDATE Giving 
        SET Tithe = '${args.giving.tithe}',
        BuildingFund = '${args.giving.buildingFund}',
        BestGift = '${args.giving.bestGift}',
        GiftForPastor = '${args.giving.giftForPastor}',
        GiftForBrother = '${args.giving.giftForBrother}',
        Youth = '${args.giving.youth}',
        FlowerOrPlants = '${args.giving.flowerOrPlants}',
        FEBC700 = '${args.giving.fEBC700}',
        Dance = '${args.giving.dance}',
        Music = '${args.giving.music}',
        Meralco = '${args.giving.meralco}',
        ChildrensMinistry = '${args.giving.childrensMinistry}',
        Others = '${args.giving.others}',
        Total = '${args.giving.total}'
        WHERE Id = '${args.id}'`;
      return await otherQuery(q);
    }
  );

  ipcMain.handle("deleteOffering", async (_event, id) => {
    const q = `DELETE FROM Giving WHERE Id = '${id}';`;
    const data = await otherQuery(q);
    return data;
  });
};

export { GivingApi };
