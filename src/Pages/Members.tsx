import DashboardSidebar from "../components/DashboardSidebar";
import { Grid, Icon, Header, Image, Table, Button } from "semantic-ui-react";
import { useNavigate } from "react-router";
import { IMember } from "../data/member";
import { useEffect } from "react";

export default function Members() {
  let navigate = useNavigate();
  let allMembers = [];

  const getAllMembers = async () => {
    allMembers = await window.api.getMembers() as IMember | any;
    console.log(allMembers);
  };

  const onMemberAdd = () => {
    navigate("/member-add");
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
              <Table.Row>
                <Table.Cell selectable>
                  <a href="/member-view">
                    <Header as="h4" image>
                      <Image
                        src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                        rounded
                        size="mini"
                      />
                      <Header.Content>Lena</Header.Content>
                    </Header>
                  </a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a href="/member-edit">Edit</a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a href="/member-delete">Delete</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>
                  <a href="/member-view">
                    <Header as="h4" image>
                      <Image
                        src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                        rounded
                        size="mini"
                      />
                      <Header.Content>Matthew</Header.Content>
                    </Header>
                  </a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a href="/member-edit">Edit</a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a href="/member-delete">Delete</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>
                  <a href="/member-view">
                    <Header as="h4" image>
                      <Image
                        src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                        rounded
                        size="mini"
                      />
                      <Header.Content>Lindsay</Header.Content>
                    </Header>
                  </a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a href="/member-edit">Edit</a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a href="/member-delete">Delete</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>
                  <a href="/member-view">
                    <Header as="h4" image>
                      <Image
                        src="https://react.semantic-ui.com/images/avatar/small/mark.png"
                        rounded
                        size="mini"
                      />
                      <Header.Content>Mark</Header.Content>
                    </Header>
                  </a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a href="/member-edit">Edit</a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a href="/member-delete">Delete</a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
