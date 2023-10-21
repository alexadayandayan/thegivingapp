import DashboardSidebar from "../Components/DashboardSidebar";
import { Grid, Icon, Header, Image, Table, Button } from "semantic-ui-react";
import { useNavigate } from "react-router";
import { IMember } from "../Data/member";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Members() {
  let navigate = useNavigate();
  const [allMembers, setAllMembers] = useState<any[]>([]);

  const getAllMembers = async () => {
    const members = (await window.api.getMembers()) as IMember | any;
    setAllMembers(members);
  };

  const onMemberAdd = () => {
    navigate("/member-add");
  };

  const handleDelete = async (e: React.SyntheticEvent<HTMLElement, Event>) => {
    const deleteMember = await window.api.deleteMember(e.currentTarget.id);
    if (deleteMember !== "Success") {
      console.log("Failed on deleting member");
    }
  };

  useEffect(() => {
    getAllMembers();
  });

  return (
    <div>
      <Grid columns="equal">
        <Grid.Column>
          <DashboardSidebar />
        </Grid.Column>

        <Grid.Column width={13}>
          <div className="header-block">
            <Grid columns="equal">
              <Grid.Column>
                <h3>Members</h3>
              </Grid.Column>
              <Grid.Column>
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                  onClick={onMemberAdd}
                >
                  <Icon name="user" /> Add Member
                </Button>
              </Grid.Column>
            </Grid>
          </div>

          <Table basic="very" celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell colSpan="2">Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {allMembers.length
                ? allMembers.map((member) => (
                    <Table.Row key={"uniqueId" + member.Firstname}>
                      <Table.Cell selectable>
                        <Link to="/member-view">
                          <Header as="h4" image>
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
                        </Link>
                      </Table.Cell>
                      <Table.Cell selectable>
                        <Link to={`/member-edit/'${member.Id}'`}>Edit</Link>
                      </Table.Cell>
                      <Table.Cell selectable>
                        <Link
                          id={member.Id}
                          to="/members"
                          onClick={handleDelete}
                        >
                          Delete
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  ))
                : null}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
