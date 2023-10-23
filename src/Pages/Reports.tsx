import { Grid, Icon, Tab, Form, Message } from 'semantic-ui-react';
import DashboardSidebar from '../Components/DashboardSidebar';

const yearOptions = [
  { key: '2020', text: '2020', value: '2020' },
  { key: '2021', text: '2021', value: '2021' },
  { key: '2022', text: '2022', value: '2022' },
  { key: '2023', text: '2023', value: '2023' }
]
const monthOptions = [
  { key: 'Jan', text: 'January', value: 'jan' },
  { key: 'Feb', text: 'February', value: 'feb' },
  { key: 'Mar', text: 'March', value: 'mar' },
  { key: 'Apr', text: 'April', value: 'apr' },
  { key: 'May', text: 'May', value: 'may' },
  { key: 'Jun', text: 'June', value: 'jun' },
  { key: 'Jul', text: 'July', value: 'jul' },
  { key: 'Aug', text: 'August', value: 'aug' },
  { key: 'Sep', text: 'September', value: 'sep' },
  { key: 'Oct', text: 'October', value: 'oct' },
  { key: 'Nov', text: 'November', value: 'nov' },
  { key: 'Dec', text: 'December', value: 'dec' }
]
const weekOptions = [
  { key: 'all', text: 'All Weeks', value: 'all' },
  { key: 'week1', text: 'Week 1', value: 'week1' },
  { key: 'week2', text: 'Week 2', value: 'week2' },
  { key: 'week3', text: 'Week 3', value: 'week3' },
  { key: 'week4', text: 'Week 4', value: 'week4' }
]
const genderOptions = [
  { key: 'A', text: 'All', value: 'all' },
  { key: 'M', text: 'Male', value: 'male' },
  { key: 'F', text: 'Female', value: 'female' }
]
// const statusOptions = [
//   { key: 'active', text: 'Active', value: 'active' },
//   { key: 'inactive', text: 'Inactive', value: 'I=inactive' }
// ]

const panes = [
  {
    menuItem: 'Create Report',
    render: () => <Tab.Pane attached={false}>
        <Message
          success
          header='Report Generated'
          content="You've successfully generated a report, you can locate the report file in your Downloads folder."
        />
        <Form>
            <Form.Group widths='equal'>
                <Form.Select
                    fluid
                    label='Year'
                    options={yearOptions}
                    placeholder='Select Year'
                />
                <Form.Select
                    fluid
                    label='Month'
                    options={monthOptions}
                    placeholder='Select Month'
                />
            </Form.Group>

            <Form.Group widths='equal'>
                <Form.Select
                    fluid
                    label='Week'
                    options={weekOptions}
                    placeholder='Select Week'
                />
                <Form.Select
                    fluid
                    label='Gender'
                    options={genderOptions}
                    placeholder='Select Gender'
                />
            </Form.Group>
            <Form.Button positive>Generate</Form.Button>
        </Form>
    </Tab.Pane>,
  },
  {
    menuItem: 'Recent Reports',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  }
]
export default function Reports() {
    return (
        <div>
            <DashboardSidebar />
            <Grid className="px-4 py-2">
                <Grid.Column>
                    <div className="header-block">
                        <Grid columns='equal'>
                            <Grid.Column>
                                <h3>Reports</h3>
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="calendar alternate"/>
                                17 September 2023 - 23 September 2023    
                            </Grid.Column>
                        </Grid>
                    </div>

                    <Grid columns='equal'>
                        <Grid.Column>
                            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
        </div>
    )
}
