import { useState } from 'react';
import { Sidebar, Menu, Grid, Icon, Table, Button, Dropdown} from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import DashboardSidebar from '../Components/DashboardSidebar';

const memberOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/lena.png' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/matthew.png' },
  }
];

export default function GivingAdd() {
    const [selectedMember, setSelectedMember] = useState(null);
    console.log(selectedMember);
    let navigate = useNavigate();
    const onGivingSave = () => {
        navigate('/giving')        
    }
    const onGivingCancel = () => {
        navigate('/giving')        
    }
    return (
        <>
            <Grid columns='equal'>
                <Grid.Column>
                    <DashboardSidebar />
                </Grid.Column>

                <Grid.Column width={13}>
                    <div className="header-block">
                        <Grid columns='equal'>
                            <Grid.Column>
                                <h3>New Giving Entry</h3>
                            </Grid.Column>
                        </Grid>
                    </div>
                    <div className="overflow-x">
                        <Table size='large' singleLine columns={15} celled selectable>
                            <Table.Header>
                              <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Tithe</Table.HeaderCell>
                                <Table.HeaderCell>Building Fund</Table.HeaderCell>
                                <Table.HeaderCell>Best Gift</Table.HeaderCell>
                                <Table.HeaderCell>Love Gifts</Table.HeaderCell>
                                <Table.HeaderCell>SS</Table.HeaderCell>
                                <Table.HeaderCell>Youth</Table.HeaderCell>
                                <Table.HeaderCell>Flower Or Plants</Table.HeaderCell>
                                <Table.HeaderCell>FEBC 700</Table.HeaderCell>
                                <Table.HeaderCell>Dance</Table.HeaderCell>
                                <Table.HeaderCell>Music</Table.HeaderCell>
                                <Table.HeaderCell>Meralco</Table.HeaderCell>
                                <Table.HeaderCell>Others</Table.HeaderCell>
                              </Table.Row>
                            </Table.Header>

                            <Table.Body>
                              <Table.Row>
                                <Table.Cell>                                    
                                  <Dropdown
                                    placeholder='Select Member'
                                    fluid
                                    selection
                                    options={memberOptions}
                                    className="dropdown"
                                    onChange={()=>setSelectedMember(memberOptions)}
                                  />
                                </Table.Cell>
                                <Table.Cell>{selectedMember.text}</Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                              </Table.Row>
                            </Table.Body>

                            <Table.Footer fullWidth>
                              <Table.Row>
                                <Table.HeaderCell colSpan='16'>
                                  <Button
                                    floated='right'
                                    icon
                                    labelPosition='left'
                                    primary
                                    size='small'
                                    onClick={onGivingSave}
                                  >
                                    <Icon name='like' /> Save
                                  </Button>
                                <Button
                                    floated='right'
                                    icon
                                    labelPosition='left'
                                    size='small'
                                    onClick={onGivingCancel}
                                  >
                                    <Icon name='cancel' /> Cancel
                                  </Button>
                                </Table.HeaderCell>
                              </Table.Row>
                            </Table.Footer>
                        </Table>
                    </div>
                </Grid.Column>
            </Grid>
        </>
    )
}
