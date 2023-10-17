import { Grid, Form, Icon, Button, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import DashboardSidebar from '../Components/DashboardSidebar';

export default function MemberAdd() {
    let navigate = useNavigate();
    const onMemberSave = () => {
        navigate('/members')
    }
    const onMemberSaveCancel = () => {
        navigate('/members')
    }
    const genderOptions = [
      { key: 'M', text: 'Male', value: 'male' },
      { key: 'F', text: 'Female', value: 'female' }
    ]
    const statusOptions = [
      { key: 'active', text: 'Active', value: 'active' },
      { key: 'inactive', text: 'Inactive', value: 'I=inactive' }
    ]
    return (
        <div>
            <Grid columns='equal'>
                <Grid.Column>
                    <DashboardSidebar />
                </Grid.Column>

                <Grid.Column width={13}>
                    <div className="header-block">
                        <Grid columns='equal'>
                            <Grid.Column>
                              <h3>Add Member Profile</h3>
                            </Grid.Column>
                            <Grid.Column>
                              <Button.Group floated='right'>
                                <Button onClick={onMemberSaveCancel}>Cancel</Button>
                                <Button.Or />
                                <Button positive onClick={onMemberSave}>Save</Button>
                              </Button.Group>
                            </Grid.Column>
                        </Grid>
                    </div>
                    <Message
                      success
                      header='Form Completed'
                      content="Member is successfully added to the system."
                    />
                    <Form>
                        <Form.Group widths='equal'>
                          <Form.Input fluid label='First name' placeholder='First name' />
                          <Form.Input fluid label='Last name' placeholder='Last name' />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Button
                                content="Image"
                                labelPosition="left"
                                icon="file"
                              />
                              <input
                                type="file"
                                hidden
                            />
                            <Form.Select
                                fluid
                                label='Gender'
                                options={genderOptions}
                                placeholder='Gender'
                            />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input label="Phone number" />
                            <Form.Input label="Email" type="email" />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input label="Date of Birth" type="date" />
                            <Form.Select
                                fluid
                                label='Membership Status'
                                options={statusOptions}
                                placeholder=''
                            />
                        </Form.Group>
                        <Form.TextArea label='Address' placeholder='Address' />
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}
