import { Menu, Grid, Icon} from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import DashboardSidebar from '../Components/DashboardSidebar';
 
export default function Settings() {
    return (
        <div>
            <Grid columns='equal'>
                <Grid.Column>
                    <DashboardSidebar />
                </Grid.Column>
                <Grid.Column width={13}>
                    <h3>Settings</h3>
                </Grid.Column>
            </Grid>
        </div>
    )
}
