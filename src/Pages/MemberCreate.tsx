import { Grid, Form, Button, Message, Icon } from "semantic-ui-react";
import React, { Component, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router";
import DashboardSidebar from "../Components/DashboardSidebar";

interface IMemberFormState {
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  address: string;
  phone: string;
  dateOfBirth: string;
  image: File | null;
  document: File | null;
  isActive: string;
  isDeleted: number | null;
}

class MemberCreate extends Component<{}, IMemberFormState> {
  private imageInput: React.RefObject<HTMLInputElement>;
  private documentInput: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      gender: "",
      email: "",
      address: "",
      phone: "",
      dateOfBirth: "",
      image: null,
      document: null,
      isActive: "",
      isDeleted: null,
    };

    // Initialize the ref
    this.imageInput = React.createRef();
    this.documentInput = React.createRef();
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as unknown as Pick<
      IMemberFormState,
      keyof IMemberFormState
    >);
  };

  handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      this.setState({ image: files[0] });
    }
  };

  handleDocumentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      this.setState({ document: files[0] });
    }
  };

  handleGenderChange = (
    _e: React.SyntheticEvent<HTMLElement, Event>,
    value: { value: string } | any
  ) => {
    this.setState({ gender: value?.value });
  };

  handleStatusChange = (
    _e: React.SyntheticEvent<HTMLElement, Event>,
    value: { value: string } | any
  ) => {
    this.setState({ isActive: value?.value });
  };

  handleAddressChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ address: e.target.value });
  };

  handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", this.state);
    const createMember = await window.api.createMember(this.state);
    console.log(createMember);
    // if (createMember) {
    //   const navigate = useNavigate();
    //   navigate("/members");
    // }
  };

  navigateToMembersPage = () => {
    const navigate = useNavigate();
    navigate("/members");
  };

  render() {
    const genderOptions = [
      { key: "M", text: "Male", value: "male" },
      { key: "F", text: "Female", value: "female" },
    ];

    const statusOptions = [
      { key: "active", text: "Active", value: "1" },
      { key: "inactive", text: "Inactive", value: "0" },
    ];

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
                  <h3>Add Member Profile</h3>
                </Grid.Column>
                <Grid.Column>
                  <Button.Group floated="right">
                    <Button onClick={this.navigateToMembersPage}>Cancel</Button>
                    <Button.Or />
                    <Button positive onClick={this.handleSubmit}>
                      Save
                    </Button>
                  </Button.Group>
                </Grid.Column>
              </Grid>
            </div>
            <Message
              success
              header="Form Completed"
              content="Member is successfully added to the system."
            />
            <Form noValidate onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="First name"
                  placeholder="First name"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  label="Last name"
                  placeholder="Last name"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Button
                  content="Image"
                  labelPosition="left"
                  icon="file"
                  type="button"
                  onClick={() => this.imageInput.current?.click()}
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={this.imageInput}
                  onChange={this.handleImageChange}
                />
                <Form.Select
                  fluid
                  label="Gender"
                  options={genderOptions}
                  placeholder="Gender"
                  value={this.state.gender}
                  onChange={this.handleGenderChange}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input
                  label="Phone number"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
                <Form.Input
                  name="email"
                  label="Email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  name="dateOfBirth"
                  label="Date of Birth"
                  type="date"
                  value={this.state.dateOfBirth}
                  onChange={this.handleChange}
                />
                <Form.Select
                  fluid
                  label="Membership Status"
                  options={statusOptions}
                  placeholder=""
                  value={this.state.isActive}
                  onChange={this.handleStatusChange}
                />
              </Form.Group>
              <Form.TextArea
                name="address"
                label="Address"
                placeholder="Address"
                value={this.state.address}
                onChange={this.handleAddressChange}
              />

              <Form.Group widths="equal">
                <Form.Field>
                  <label>Upload Document:</label>
                  <input
                    type="file"
                    name="document"
                    accept=".pdf, .doc, .docx"
                    style={{ display: "none" }}
                    ref={this.documentInput}
                    onChange={this.handleDocumentChange}
                  />
                  <Button
                    primary
                    type="button"
                    onClick={() => this.documentInput.current?.click()}
                  >
                    <Icon name="file" /> Choose Document
                  </Button>
                </Form.Field>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MemberCreate;
