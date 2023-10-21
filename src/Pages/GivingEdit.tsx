import {
  Grid,
  Icon,
  Header,
  Image,
  Table,
  Button,
  Form,
} from "semantic-ui-react";
import { useNavigate } from "react-router";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function GivingEdit() {
  let navigate = useNavigate();

  const onGivingSave = () => {
    navigate("/giving");
  };
  const onGivingCancel = () => {
    navigate("/giving");
  };
  return (
    <>
      <Grid columns="equal">
        <Grid.Column>
          <DashboardSidebar />
        </Grid.Column>

        <Grid.Column width={13}>
          <div className="header-block">
            <Grid columns="equal">
              <Grid.Column>
                <h3>Update Giving Entry</h3>
              </Grid.Column>
            </Grid>
          </div>
          <div className="overflow-x">
            <Table size="large" singleLine columns={15} celled selectable>
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
                    <Header as="h4" image>
                      <Image
                        src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                        rounded
                        size="mini"
                      />
                      <Header.Content>Lena</Header.Content>
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
                </Table.Row>
              </Table.Body>

              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell colSpan="16">
                    <Button
                      floated="right"
                      icon
                      labelPosition="left"
                      primary
                      size="small"
                      onClick={onGivingSave}
                    >
                      <Icon name="like" /> Save
                    </Button>
                    <Button
                      floated="right"
                      icon
                      labelPosition="left"
                      size="small"
                      onClick={onGivingCancel}
                    >
                      <Icon name="cancel" /> Cancel
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </div>
        </Grid.Column>
      </Grid>
    </>
  );
}
