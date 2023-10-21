import { Grid, Icon, Header, Image, Table, Button} from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import DashboardSidebar from '../Components/DashboardSidebar';
import { useEffect, useState } from "react";
import { IMember } from "../Data/member";
import { Link } from "react-router-dom";
 
export default function Giving() {
    let navigate = useNavigate();
    const [allMembers, setAllMembers] = useState<any[]>([]);
  
    const getAllMembers = async () => {
      const members = await window.api.getMembers() as IMember | any;
      setAllMembers(members);
    };
  
    useEffect(() => {
      getAllMembers();
    }, []);
    
    const onGivingAdd = () => {
        navigate('/giving-add')        
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
                                <h3>Giving for Today</h3>
                            </Grid.Column>
                            <Grid.Column>
                                <Button
                                    floated='right'
                                    icon
                                    labelPosition='left'
                                    primary
                                    size='small'
                                    onClick={onGivingAdd}
                                >
                                    <Icon name='like' /> Add Giving Entry
                                </Button>
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
                                <Table.HeaderCell>Total</Table.HeaderCell>
                                <Table.HeaderCell colSpan='2'>Actions</Table.HeaderCell>
                              </Table.Row>
                            </Table.Header>

                            <Table.Body>
                              {allMembers.length ? allMembers.map((member) => (
                                <Table.Row  key={"uniqueId" + member.Firstname} >
                                  <Table.Cell>
                                    <Header as='h4' image>
                                      {member.Gender === "female" ? (
                                        <Image
                                          src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                                          rounded
                                          size="mini"
                                        />
                                      ) : (
                                        <Image
                                          src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                                          rounded
                                          size="mini"
                                        />
                                      )}
                                      <Header.Content>{member.Firstname}</Header.Content>
                                    </Header>
                                  </Table.Cell>
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
                                  <Table.Cell></Table.Cell>
                                  <Table.Cell></Table.Cell>
                                  <Table.Cell selectable positive>
                                      <Link to="/giving-edit">Edit</Link>                                      
                                  </Table.Cell>
                                  <Table.Cell selectable negative>
                                      <Link to="#">Delete</Link>
                                  </Table.Cell>
                                </Table.Row>
                              )) : null}
                            </Table.Body>
                        </Table>
                    </div>
                </Grid.Column>
            </Grid>
        </>
    )
}
