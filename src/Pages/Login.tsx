import { Button, Form, Grid, Segment, Divider } from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import tgaLogo from '../assets/TGA.png';

export default function Login() {
    let navigate = useNavigate();
    const onLogin = () => {
        navigate('/dashboard')        
    }
    return (
        <div className="login-block">
            <Segment placeholder className="login-block__form">
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column className="login-block__logo" verticalAlign='middle'>
                        <div>
                            <img src={tgaLogo} className="logo tga" alt="TGA logo" />
                        </div>
                        <h2>THE GIVING APP</h2>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Form>
                          <Form.Input
                            icon='user'
                            iconPosition='left'
                            label='Username'
                            placeholder='Username'
                          />
                          <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Password'
                            type='password'
                            placeholder='Password'
                          />

                          <Button onClick={onLogin} content='Login' positive />
                        </Form>
                    </Grid.Column>
                </Grid>

                <Divider vertical></Divider>
            </Segment>
        </div>
    )
}
