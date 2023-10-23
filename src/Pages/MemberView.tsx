import { Grid, Icon, Image, Button } from "semantic-ui-react";
import { useNavigate } from "react-router";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function MemberView() {
  let navigate = useNavigate();
  const onMembers = () => {
    navigate("/members");
  };
  const onMemberEdit = () => {
    navigate("/member-edit");
  };
  return (
    <div>
      <DashboardSidebar />
      <Grid className="px-4 py-2">
        <Grid.Column>
          <div className="header-block">
            <Grid columns="equal">
              <Grid.Column>
                <h3>Member Profile</h3>
              </Grid.Column>
              <Grid.Column floated='right'>
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                  onClick={onMembers}
                >
                  <Icon name="users" /> Back to Members
                </Button>
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                  onClick={onMemberEdit}
                >
                  <Icon name="user" /> Edit Profile
                </Button>
              </Grid.Column>
            </Grid>
          </div>
          <h4>Lena Smith</h4>
          <Image
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            size="small"
          />
          <br />
          <p>
            <strong>Gender:</strong> F
          </p>
          <p>
            <strong>Email:</strong> lena@google.com
          </p>
          <p>
            <strong>Address:</strong> Sample address
          </p>
          <p>
            <strong>Phone:</strong> 1234567890
          </p>
          <p>
            <strong>Date of Birth:</strong> 01/01/1900
          </p>
          <p>
            <strong>Membership Status:</strong> Active
          </p>
          <p>
            <strong>Document/s:</strong> None
          </p>
        </Grid.Column>
      </Grid>
    </div>
  );
}
