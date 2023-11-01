import { ipcMain } from "electron";
import { getAllQuery } from "../query";

const ReportApi = () => {
  ipcMain.handle("getReports", async (_event, arg) => {
    const q = `
                SELECT
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
            WHERE 
                strftime('%Y-%m-%d', EntryDate) BETWEEN '${arg.startDate}' AND '${arg.endDate}' 
                AND M.Gender = '${arg.gender}';`;

    const data = await getAllQuery(q);
    return data;
  });
};

export { ReportApi };
