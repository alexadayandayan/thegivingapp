import DashboardSidebar from "../Components/DashboardSidebar";
import { IMemberFormState } from "../Data/member";
import { lowerCaseKeys } from "../utils/LowerCaseKeys";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect,
} from "react";
import { useNavigate, useParams } from "react-router";
import { Form, Button, Grid, Message, Icon } from "semantic-ui-react";

const MemberEdit: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: number | any }>();
  const [formData, setFormData] = useState<IMemberFormState>({
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
  });

  const getMember = async () => {
    const member = await window.api.getMemberById(+id);
    const x = lowerCaseKeys(member);
    setFormData({
      ...x,
      isActive: x?.isActive?.toString(),
    });
  };
  const imageInput = useRef<HTMLInputElement>(null);
  const documentInput = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenderChange = (
    _e: React.SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setFormData({
      ...formData,
      gender: data.value,
    });
  };

  const handleStatusChange = (
    _e: React.SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setFormData({
      ...formData,
      isActive: data.value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        image: files[0],
      });
    }
  };

  const handleDocumentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        document: files[0],
      });
    }
  };

  const handleAddressChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      address: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const updateMember = await window.api.updateMember({
      id: +id,
      member: formData,
    });
    if (updateMember !== "Success") {
      return;
    }
    navigate("/members");
  };
  const genderOptions = [
    { key: "M", text: "Male", value: "male" },
    { key: "F", text: "Female", value: "female" },
  ];

  const statusOptions = [
    { key: "active", text: "Active", value: "1" },
    { key: "inactive", text: "Inactive", value: "0" },
  ];

  useEffect(() => {
    getMember();
  }, []);

  return (
    <div>
      <DashboardSidebar />
      <Grid className="px-4 py-2">
        <Grid.Column>
          <div className="header-block">
            <Grid columns="equal">
              <Grid.Column>
                <h3>Update Member Profile</h3>
              </Grid.Column>
              <Grid.Column>
                <Button.Group floated="right">
                  <Button onClick={() => navigate("/members")}>Cancel</Button>
                  <Button.Or />
                  <Button positive onClick={handleSubmit}>
                    Update
                  </Button>
                </Button.Group>
              </Grid.Column>
            </Grid>
          </div>
          <Message
            success
            header="Form Completed"
            content="Member is successfully updated."
          />
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First name"
                placeholder="First name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                label="Last name"
                placeholder="Last name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Button
                content="Image"
                labelPosition="left"
                icon="file"
                type="button"
                onClick={() => imageInput.current?.click()}
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                style={{ display: "none" }}
                ref={imageInput}
                onChange={handleImageChange}
              />
              <Form.Select
                fluid
                label="Gender"
                options={genderOptions}
                placeholder="Gender"
                value={formData.gender}
                onChange={handleGenderChange}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                label="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Form.Input
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                name="dateOfBirth"
                label="Date of Birth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
              <Form.Select
                fluid
                label="Membership Status"
                options={statusOptions}
                placeholder=""
                value={formData.isActive}
                onChange={handleStatusChange}
              />
            </Form.Group>
            <Form.TextArea
              name="address"
              label="Address"
              placeholder="Address"
              value={formData.address}
              onChange={handleAddressChange}
            />

            <Form.Group widths="equal">
              <Form.Field>
                <label>Upload Document:</label>
                <input
                  type="file"
                  name="document"
                  accept=".pdf, .doc, .docx"
                  style={{ display: "none" }}
                  ref={documentInput}
                  onChange={handleDocumentChange}
                />
                <Button
                  primary
                  type="button"
                  onClick={() => documentInput.current?.click()}
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
};

export default MemberEdit;
