import DashboardSidebar from "@/Components/DashboardSidebar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Icon, Table, Header, Image } from "semantic-ui-react";

const GivingTest: React.FC = () => {
  const [offerings, setOfferings] = useState<any[]>([]);

  const getOfferings = async () => {
    const giving = await window.api.getOfferings();
    console.log(giving);
    setOfferings(giving);
  };

  useEffect(() => {
    getOfferings();
  }, []);

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
                <h3>Giving for Today</h3>
              </Grid.Column>
              <Grid.Column>
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="like" /> Add Giving Entry
                </Button>
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
                  <Table.HeaderCell>Total</Table.HeaderCell>
                  <Table.HeaderCell colSpan="2">Actions</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {offerings.length
                  ? offerings.map((member) => (
                      <Table.Row key={"uniqueId" + member.Giving}>
                        <Table.Cell>
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
                    ))
                  : null}
              </Table.Body>
            </Table>
          </div>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default GivingTest;
