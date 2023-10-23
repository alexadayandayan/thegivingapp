import { Segment, Sidebar, Menu, Icon} from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import tgaLogo from '../assets/TGA.png';
 

export default function DashboardSidebar() {
    let navigate = useNavigate();
    const onLogout = () => {
        window.api.logout();
        // Navigate to login page
        navigate('/')     
    }
    const onDashboard = () => {
        navigate('/dashboard')        
    }
    const onMembers = () => {
        navigate('/members')        
    }
    const onGiving = () => {
        navigate('/giving')        
    }
    const onReports = () => {
        navigate('/reports')        
    }
    const onSettings = () => {
        navigate('/settings')        
    }
    
    return (
        <>
            <Segment inverted className='rounded-0'>
                <Menu inverted pointing secondary>
                    <Menu.Item as='a' onClick={onDashboard}>
                        {/* <Icon>
                            <img src={tgaLogo} className="logo-small tga" alt="TGA logo" />
                        </Icon> */}
                        <Icon name='home' />
                        Dashboard
                    </Menu.Item>
                    <Menu.Item as='a' onClick={onMembers}>
                        <Icon name='users' />
                        Members
                    </Menu.Item>
                    <Menu.Item as='a' onClick={onGiving}>
                        <Icon name='like' />
                        Giving
                    </Menu.Item>
                    <Menu.Item as='a' onClick={onReports}>
                        <Icon name='sticky note' />
                        Reports
                    </Menu.Item>
                    <Menu.Item as='a' onClick={onSettings}>
                        <Icon name='cog' />
                        Settings
                    </Menu.Item>
                    <Menu.Item as='a' onClick={onLogout}>
                        <Icon name='log out' />
                        Logout
                    </Menu.Item>
                </Menu>
            </Segment>
        </>
    )
}
