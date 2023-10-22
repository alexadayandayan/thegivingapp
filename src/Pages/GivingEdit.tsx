import { lowerCaseKeys } from "@/utils/LowerCaseKeys";
import DashboardSidebar from "../Components/DashboardSidebar";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  Button,
  Grid,
  Icon,
  Table,
  Header,
  Image,
  Form,
} from "semantic-ui-react";

interface IOfferingFormState {
  id: number | null;
  giving: number;
  bestGift: number;
  buildingFund: number;
  childrensMinistry: number;
  dance: number;
  fEBC700: number;
  flowerOrPlants: number;
  meralco: number;
  music: number;
  giftForPastor: number;
  giftForBrother: number;
  others: string;
  tithe: number;
  total: number;
  youth: number;
  firstname: string | null;
  lastname: string | null;
  gender: string | null;
}

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
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.buildingFund}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.bestGift}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.fEBC700}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.giftForPastor}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.giftForBrother}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.childrensMinistry}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.flowerOrPlants}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.youth}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.dance}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.meralco}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.music}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.others}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Input
                        name="tithe"
                        type="number"
                        value={formData.total}
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
                      >
                        <Icon name="like" /> Save
                      </Button>
                      <Button
                        floated="right"
                        icon
                        labelPosition="left"
                        size="small"
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
