import { Grid } from "semantic-ui-react";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function Settings() {
  return (
    <div>
      <DashboardSidebar />
      <Grid className="px-4 py-2">
        <Grid.Column width={13}>
          <h3>Settings</h3>
        </Grid.Column>
      </Grid>
    </div>
  );
}
