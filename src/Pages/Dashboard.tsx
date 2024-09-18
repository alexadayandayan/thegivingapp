import { Grid, GridColumn } from "semantic-ui-react";
import DashboardSidebar from "@/Components/DashboardSidebar";
import DashboardMonthly from "@/Components/DashboardMonthly";
import DashboardYearly from "@/Components/DashboardYearly";
//import DashboardCalendar from "@/Components/DashboardCalendar";

import { TfiViewListAlt } from "react-icons/tfi";
import { TfiViewGrid } from "react-icons/tfi";
import { TfiViewList } from "react-icons/tfi";



export default function Dashboard() {
  return (
    <div className="bg-slate-100 h-full">
      <DashboardSidebar />
      
      <Grid className="container-fluid mx-auto py-4" columns="equal">
        <Grid.Row className="flex mx-6 gap-6">
          <Grid.Column className="w-1/2  px-4 bg-blue-950 text-white rounded-md p-6 shadow-card">
            <h2 className="font-bold uppercase text-off-white">Today's Collection</h2>
            <p className="big-text">P100,000</p>
          </Grid.Column>
          <Grid.Column className="w-1/2 px-4">
            <Grid className="h-full" columns="equal">
              <Grid.Row className="gap-6">
                <GridColumn className="bg-white rounded-md p-6 shadow-card flex flex-col justify-center items-center h-full">
                  <a href="/member-view" className="w-full h-full absolute top-0 left-0"></a>
                  <div className="flex items-center gap-3">
                    <TfiViewListAlt />
                    <span className="font-bold text-[18px]">Weekly</span>
                  </div>
                  <div className="font-normal text-[14px] mt-2">Generate a weekly report</div>
                </GridColumn>
                <GridColumn className="bg-white rounded-md p-6 shadow-card flex flex-col justify-center items-center h-full">
                  <a href="/member-view" className="w-full h-full absolute top-0 left-0"></a>
                  <div className="flex items-center gap-3">
                    <TfiViewGrid className="text-blue-950" />
                    <span className="font-bold text-[18px]">Monthly</span>
                  </div>
                  <div className="font-normal text-[14px] mt-2">Generate a monthly report</div>
                </GridColumn>
                <GridColumn className="bg-white rounded-md p-6 shadow-card flex flex-col justify-center items-center h-full">
                  <a href="/member-view" className="w-full h-full absolute top-0 left-0"></a>
                  <div className="flex items-center gap-3">
                    <TfiViewList />
                    <span className="font-bold text-[18px]">Annually</span>
                  </div>
                  <div className="font-normal text-[14px] mt-2">Generate an annual report</div>
                </GridColumn>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="flex mx-6 gap-6">
          <Grid.Column className="bg-white rounded-md p-6 shadow-card">
            <DashboardMonthly />
          </Grid.Column>
          
          <Grid.Column className="bg-white rounded-md p-6 shadow-card">
            <DashboardYearly />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
