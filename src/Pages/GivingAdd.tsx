import DashboardSidebar from "../Components/DashboardSidebar";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, Grid, Icon, Table, Form, Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router";
import { IMember } from "../Data/member";
import { IOfferingFormState } from "../Data/giving";

const GivingTest: React.FC = () => {
  const navigate = useNavigate();
  const [allMembers, setAllMembers] = useState<any[]>([]);
  const [formData, setFormData] = useState<IOfferingFormState | any>({
    bestGift: 0,
    buildingFund: 0,
    childrensMinistry: 0,
    dance: 0,
    fEBC700: 0,
    flowerOrPlants: 0,
    meralco: 0,
    music: 0,
    giftForPastor: 0,
    giftForBrother: 0,
    others: "",
    tithe: 0,
    total: 0,
    youth: 0,
    firstname: null,
    lastname: null,
    gender: null,
  });

  const getAllMembers = async () => {
    const members = (await window.api.getMembers()) as IMember | any;
    const options: any = members?.map((m: any) => ({
      key: m.Id,
      text: `${m.Firstname} ${m.Lastname}`,
      value: m.Id,
    }));
    setAllMembers(options);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMemberChange = (
    _e: React.SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setFormData({
      ...formData,
      memberId: data.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const createGiving = await window.api.createOffering(formData);
    if (createGiving !== "Success") {
      return;
    }
    navigate("/giving");
  };

  useEffect(() => {
    getAllMembers();
  }, []);
  return (
    <>
      <DashboardSidebar />
      <Form>
        <Grid className="px-4 py-2">
          <Grid.Column>
            <div className="header-block">
              <Grid columns="equal">
                <Grid.Column>
                  <h3>New Giving Entry</h3>
                </Grid.Column>
              </Grid>
            </div>
            <Table size="large" celled selectable fixed>
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
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Dropdown
                      placeholder="Select Member"
                      fluid
                      selection
                      options={allMembers}
                      className="dropdown"
                      onChange={handleMemberChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="tithe"
                      type="number"
                      value={formData.tithe}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="buildingFund"
                      type="number"
                      value={formData.buildingFund}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="bestGift"
                      type="number"
                      value={formData.bestGift}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="fEBC700"
                      type="number"
                      value={formData.fEBC700}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="giftForPastor"
                      type="number"
                      value={formData.giftForPastor}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="giftForBrother"
                      type="number"
                      value={formData.giftForBrother}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="childrensMinistry"
                      type="number"
                      value={formData.childrensMinistry}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="flowerOrPlants"
                      type="number"
                      value={formData.flowerOrPlants}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="youth"
                      type="number"
                      value={formData.youth}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="dance"
                      type="number"
                      value={formData.dance}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="meralco"
                      type="number"
                      value={formData.meralco}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="music"
                      type="number"
                      value={formData.music}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="others"
                      type="number"
                      value={formData.others}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      name="total"
                      type="number"
                      value={formData.total}
                      onChange={handleChange}
                    />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="15">
                    <Button
                      floated="right"
                      icon
                      labelPosition="left"
                      primary
                      size="small"
                      onClick={handleSubmit}
                    >
                      <Icon name="like" /> Save
                    </Button>
                    <Button
                      floated="right"
                      icon
                      labelPosition="left"
                      size="small"
                      onClick={handleSubmit}
                    >
                      <Icon name="cancel" /> Cancel
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
        </Grid>
      </Form>
    </>
  );
};

export default GivingTest;
