import { Menu, Grid, Icon, Table } from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import DashboardSidebar from '../Components/DashboardSidebar';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Monthly Collection',
    },
  },
};

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};
 
export default function Dashboard() {
    return (
        <div>
            <Grid columns='equal'>
                <Grid.Column>
                    <DashboardSidebar />
                </Grid.Column>
                <Grid.Column width={13}>
                    <h3>Good Morning, Pastor</h3>

                    <Grid columns='equal'>
                        <Grid.Column>
                            <Line options={options} data={data} />
                        </Grid.Column>
                    </Grid>

                    <Grid columns='equal'>
                        <Grid.Column>
                            <h3>Generate Reports</h3>
                            <Table basic='very' celled>
                                <Table.Body>
                                  <Table.Row>
                                    <Table.Cell selectable>
                                      <a href="/member-view">
                                        Weekly
                                      </a>
                                    </Table.Cell>
                                  </Table.Row>
                                  <Table.Row>
                                    <Table.Cell selectable>
                                      <a href="/member-view">
                                        Monthly
                                      </a>
                                    </Table.Cell>
                                  </Table.Row>
                                  <Table.Row>
                                    <Table.Cell selectable>
                                      <a href="/member-view">
                                        Annually
                                      </a>
                                    </Table.Cell>
                                  </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>

                        <Grid.Column>
                            <h3>Upcoming Events</h3>
                            <Table basic='very' celled>
                                <Table.Body>
                                  <Table.Row>
                                    <Table.Cell selectable>
                                      <a href="/member-view">
                                        Weekly
                                      </a>
                                    </Table.Cell>
                                  </Table.Row>
                                  <Table.Row>
                                    <Table.Cell selectable>
                                      <a href="/member-view">
                                        Monthly
                                      </a>
                                    </Table.Cell>
                                  </Table.Row>
                                  <Table.Row>
                                    <Table.Cell selectable>
                                      <a href="/member-view">
                                        Annually
                                      </a>
                                    </Table.Cell>
                                  </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
        </div>
    )
}