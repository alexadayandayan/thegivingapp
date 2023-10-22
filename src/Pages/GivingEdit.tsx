import { lowerCaseKeys } from "@/utils/LowerCaseKeys";
import DashboardSidebar from "../Components/DashboardSidebar";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IOfferingFormState } from "../Data/giving";
import {
  Button,
  Grid,
  Icon,
  Table,
  Header,
  Image,
  Form,
} from "semantic-ui-react";

const GivingEdit: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: number | any }>();
  const [formData, setFormData] = useState<IOfferingFormState>({
    id: null,
    giving: 0,
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

  const getMemberOffering = async () => {
    console.log(id?.slice(1, -1));

    const member = await window.api.getOfferingById(id?.slice(1, -1));
    const x = lowerCaseKeys(member);
    console.log(x);
    setFormData({
      ...x,
      isActive: x.isActive?.toString(),
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // const updateMember = await window.api.updateMember(formData);
    // if (updateMember !== "Success") {
    //   return;
    // }
    // navigate("/members");
  };

  useEffect(() => {
    getMemberOffering();
  }, []);
  return (
    <>
      <Form>
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
                      <Header as="h4" image>
                        {formData.gender === "female" ? (
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
                        <Header.Content>{formData.firstname}</Header.Content>
                      </Header>
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
                        name="tithe"
                        type="number"
                        value={formData.buildingFund}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.bestGift}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.fEBC700}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.giftForPastor}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.giftForBrother}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.childrensMinistry}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.flowerOrPlants}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.youth}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.dance}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.meralco}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.music}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.others}
                        onChange={handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.total}
                        onChange={handleChange}
                      />
                    </Table.Cell>
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
                        onClick={handleSubmit}
                      >
                        <Icon name="like" /> Save
                      </Button>
                      <Button
                        floated="right"
                        icon
                        labelPosition="left"
                        size="small"
                        onClick={() => navigate("/giving")}
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
      </Form>
    </>
  );
};

export default GivingEdit;
