import { Segment, Menu, Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import tgaLogo from '../assets/TGA.png';
import { useState } from "react";


export default function DashboardSidebar() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onLogout = async (event: any) => {
        // Set a loading state before making the API call
        setLoading(true);
        try {
            const logout = await window.api.logout();
            console.log(logout);
        } catch (error) {
            // Handle errors, e.g., display an error message to the user
            console.error("Failed logging out: " + error);
        } finally {
            // Reset the loading state whether the call succeeds or fails
            setLoading(false);
            // Navigate to login page
            navigate('/');
        }
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
                        <img src={tgaLogo} className="logo-small" alt="TGA logo" />
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
            
            {loading && (
               <div className="loader-wrapper position-absolute">
                    <span className="loader"></span>
                </div>
            )}
        </>
    )
}
