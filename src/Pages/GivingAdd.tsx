import DashboardSidebar from "../Components/DashboardSidebar";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, Grid, Icon, Table, Form, FormGroup, FormField, Input, TextArea, Select, Checkbox, Message } from "semantic-ui-react";
import { useNavigate } from "react-router";
import { IMember } from "../Data/member";
import { IOfferingFormState } from "../Data/giving";

const GivingTest: React.FC = () => {
  const navigate = useNavigate();
  const [allMembers, setAllMembers] = useState<any[]>([]);
  const [selectedMember, setSelectedMember] = useState<any[]>([]);
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

  const handleMemberChange = async (
    _e: React.SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    const members = (await window.api.getMemberById(data.value)) as IMember | any;
    setSelectedMember(members.Firstname);
    setFormData({
      ...formData,
      memberId: members.Id,
      firstname: members.Firstname,
      lastname: members.Lastname,
      gender: members.Gender,
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

      <div className="px-4 py-2">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h2 className="font-bold text-[24px] mb-0">New Giving Entry</h2>
            </Grid.Column>
          </Grid.Row>
            
          <Grid.Row>
            <Grid.Column>
              <Form success className="w-full">
                <Message
                  success
                  header='Form Completed'
                  content="Successfully added a giving entry for selectedMember." 
                />
                <Grid columns='4' divided>
                  <Grid.Row>
                    <Grid.Column>
                      <div className="bg-white rounded-md shadow-3 p-10">
                        <FormField
                          control={Select}
                          options={allMembers}
                          label="Select Member"
                          placeholder='Select Member'
                          search
                          searchInput={{ id: 'form-select-control-member' }}
                          onChange={handleMemberChange}
                        />
                        <FormField
                          id='form-input-control-member-id'
                          control={Input}
                          label='Member ID'
                          value={formData.memberId}
                          placeholder='Member ID'
                          readOnly
                        />
                        <FormField
                          id='form-input-control-first-name'
                          control={Input}
                          label='First name'
                          value={formData.firstname}
                          placeholder='First name'
                          readOnly
                        />
                        <FormField
                          id='form-input-control-last-name'
                          control={Input}
                          label='Last name'
                          value={formData.lastname}
                          placeholder='Last name'
                          readOnly
                        />
                        <FormField
                          id='form-input-control-gender'
                          control={Input}
                          label='Gender'
                          value={formData.gender}
                          placeholder='Gender'
                          readOnly
                        />
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <FormGroup>
                        <FormField
                          id='form-input-control-tithe'
                          control={Input}
                          type='number'
                          label='Tithe'
                          placeholder='0'
                        />
                        <FormField
                          id='form-input-control-bldg-fund'
                          control={Input}
                          type='number'
                          label='Building Fund'
                          placeholder='0'
                        />
                        <FormField
                          id='form-input-control-best-gift'
                          control={Input}
                          type='number'
                          label='Best Gift to the Lord'
                          placeholder='0'
                        />
                        <FormField
                          id='form-input-control-seed-faith'
                          control={Input}
                          type='number'
                          label='Seed Faith'
                          placeholder='0'
                          readOnly
                        />
                      </FormGroup>
                      <FormGroup widths='equal'>
                          <FormField
                            id='form-input-control-pastor'
                            control={Input}
                            type='number'
                            label='Gift for Pastor'
                            placeholder='0'
                          />
                          <div className="flex gap-2">                      
                            <FormField
                              control={Select}
                              options={allMembers}
                              label="Gift for Bro/Sis"
                              placeholder='Select Member'
                              search
                              searchInput={{ id: 'form-select-control-gift-member' }}
                            />

                            <FormField
                              id='form-input-control-brethren'
                              control={Input}
                              type='number'
                              label='&nbsp;'
                              placeholder='0'
                            /> 
                          </div>
                          <FormField
                            id='form-input-control-febc'
                            control={Input}
                            type='number'
                            label='FEBC 700'
                            placeholder='0'
                          />
                          <FormField
                            id='form-input-control-utilities'
                            control={Input}
                            type='number'
                            label='Utilities'
                            placeholder='0'
                          />                 
                      </FormGroup>
                      <FormGroup widths='equal'>
                          <FormField
                            id='form-input-control-children'
                            control={Input}
                            type='number'
                            label="Children"
                            placeholder='0'
                          />  
                          <FormField
                            id='form-input-control-youth'
                            control={Input}
                            type='number'
                            label='Youth'
                            placeholder='0'
                          />
                          <FormField
                            id='form-input-control-dance'
                            control={Input}
                            type='number'
                            label='Dance'
                            placeholder='0'
                          />
                          <FormField
                            id='form-input-control-music'
                            control={Input}
                            type='number'
                            label='Music'
                            placeholder='0'
                          />
                          <FormField
                            id='form-input-control-flowers'
                            control={Input}
                            type='number'
                            label='Flower/Plants'
                            placeholder='0'
                          />
                      </FormGroup>
                      <FormGroup widths='equal'>
                        <FormField
                          id='form-input-control-others'
                          control={TextArea}
                          label='Others'
                          placeholder='Others'
                        />
                        
                      </FormGroup>
                      <FormField
                        control={Checkbox}
                        label='I confirmed that the details entered are correct.'
                      />
                    </Grid.Column> 
                    <FormField control={Button}>Submit</FormField>
                  </Grid.Row>
                </Grid>
              </Form>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default GivingTest;
