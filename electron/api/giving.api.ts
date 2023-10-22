import { ipcMain } from "electron";
import { getAllQuery, getQuery, otherQuery } from "../query";
import { IOfferingFormState } from "@/Data/giving";

function GivingApi() {
  ipcMain.handle("getOfferings", async (_event) => {
    const q = `SELECT
          C.Id AS Giving,
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
      C.Id AS Giving,
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

  ipcMain.handle("updateOffering", async (_event, args: IOfferingFormState) => {
    const q = `UPDATE Giving 
        SET Tithe = '${args.tithe}',
        BuildingFund = '${args.buildingFund}',
        BestGift = '${args.bestGift}',
        GiftForPastor = '${args.giftForPastor}',
        GiftForBrother = '${args.giftForBrother}',
        Youth = '${args.youth}',
        FlowerOrPlants = '${args.flowerOrPlants}',
        FEBC700 = '${args.fEBC700}',
        Dance = '${args.dance}',
        Music = '${args.music}',
        Meralco = '${args.meralco}',
        ChildrensMinistry = '${args.childrensMinistry}',
        Others = '${args.others}',
        Total = '${args.total}',
        WHERE Id = '${args.id}'`;
    return await otherQuery(q);
  });
}

export { GivingApi };
