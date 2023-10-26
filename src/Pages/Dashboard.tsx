import { Grid, Table } from "semantic-ui-react";
import DashboardSidebar from "@/Components/DashboardSidebar";
import DashboardMonthly from "@/Components/DashboardMonthly";
import DashboardYearly from "@/Components/DashboardYearly";
import DashboardCalendar from "@/Components/DashboardCalendar";


export default function Dashboard() {
  return (
    <div>
      <DashboardSidebar />
      <Grid className="px-4 py-2">
        <Grid.Column>
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column>
                <h2>Today's Collection</h2>
                <p className="big-text">P100,000</p>
              </Grid.Column>
              <Grid.Column>
                <DashboardMonthly />
              </Grid.Column>
              <Grid.Column>
                <DashboardYearly />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <h3>Generate Reports</h3>
                <Table basic="very" celled>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell selectable>
                        <a href="/member-view">Weekly</a>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell selectable>
                        <a href="/member-view">Monthly</a>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell selectable>
                        <a href="/member-view">Annually</a>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column width={5}>
                <h3>Upcoming Events</h3>
                <DashboardCalendar />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    </div>
  );
}
