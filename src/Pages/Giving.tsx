import DashboardSidebar from "../Components/DashboardSidebar";
import React, { useState, useEffect } from "react";
import { Button, Grid, Icon, Table, Header, Image } from "semantic-ui-react";
import { IGiving } from "../Data/giving";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Giving: React.FC = () => {
  let navigate = useNavigate();
  const [offerings, setOfferings] = useState<IGiving[]>([]);

  const getOfferings = async () => {
    const giving = (await window.api.getOfferings()) as IGiving | any;
    setOfferings(giving);
  };

  const handleDelete = async (e: React.SyntheticEvent<HTMLElement, Event>) => {
    const deleteMember = await window.api.deleteOffering(e.currentTarget.id);
    if (deleteMember !== "Success") {
      console.log("Failed in deleting Offering");
    }
    getOfferings();
  };

  const onGivingAdd = () => {
    navigate("/giving-add");
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
                  onClick={onGivingAdd}
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
                  <Table.HeaderCell>FEBC 700</Table.HeaderCell>
                  <Table.HeaderCell>Gift for Pastor</Table.HeaderCell>
                  <Table.HeaderCell>Gift for Bro/Sis</Table.HeaderCell>
                  <Table.HeaderCell>Children's Ministry</Table.HeaderCell>
                  <Table.HeaderCell>Flower/Plants</Table.HeaderCell>
                  <Table.HeaderCell>L&S Youth</Table.HeaderCell>
                  <Table.HeaderCell>Dance</Table.HeaderCell>
                  <Table.HeaderCell>Meralco/Maynilad</Table.HeaderCell>
                  <Table.HeaderCell>Music</Table.HeaderCell>
                  <Table.HeaderCell>Others</Table.HeaderCell>
                  <Table.HeaderCell>Total</Table.HeaderCell>
                  <Table.HeaderCell>Entry Date</Table.HeaderCell>
                  <Table.HeaderCell colSpan="2">Actions</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {offerings.length
                  ? offerings.map((offering) => (
                      <Table.Row key={"uniqueId" + offering.Id}>
                        <Table.Cell>
                          <Header as="h4" image>
                            {offering.Gender === "female" ? (
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
                            <Header.Content>
                              {offering.Firstname}
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>{offering.Tithe}</Table.Cell>
                        <Table.Cell>{offering.BuildingFund}</Table.Cell>
                        <Table.Cell>{offering.BestGift}</Table.Cell>
                        <Table.Cell>{offering.FEBC700}</Table.Cell>
                        <Table.Cell>{offering.GiftForPastor}</Table.Cell>
                        <Table.Cell>{offering.GiftForBrother}</Table.Cell>
                        <Table.Cell>{offering.ChildrensMinistry}</Table.Cell>
                        <Table.Cell>{offering.FlowerOrPlants}</Table.Cell>
                        <Table.Cell>{offering.Youth}</Table.Cell>
                        <Table.Cell>{offering.Dance}</Table.Cell>
                        <Table.Cell>{offering.Meralco}</Table.Cell>
                        <Table.Cell>{offering.Music}</Table.Cell>
                        <Table.Cell>{offering.Others}</Table.Cell>
                        <Table.Cell>{offering.Total}</Table.Cell>
                        <Table.Cell>{offering.EntryDate}</Table.Cell>
                        <Table.Cell selectable positive>
                          <Link to={`/giving-edit/'${offering.Id}'`}>Edit</Link>
                        </Table.Cell>
                        <Table.Cell selectable>
                          <Link
                            id={offering.Id}
                            to="/giving"
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
          </div>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Giving;
