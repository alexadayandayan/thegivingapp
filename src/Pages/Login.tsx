import { Button, Form, Grid, Segment, Divider } from "semantic-ui-react";
import { useNavigate } from "react-router";
import tgaLogo from "../assets/TGA.png";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { IUser } from "../data/user";

export default function Login() {
  let navigate = useNavigate();
  //   const usernameInputRef: any = useRef();
  //   const passwordInputRef: any = useRef();
  let [isInvalid, setIsInvalid] = useState(false);
  let [getProfile, setProfile] = useState<IUser | any>(null);

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    const username = form?.username?.value;
    const password = form?.password?.value;
    const prof = await window.api.login({ username: username });
    setProfile(prof);

    // Check if login matched
    setIsInvalid(bcrypt?.compareSync(password, prof?.Password));

    if (bcrypt.compareSync(password, prof?.Password)) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-block">
      <Segment placeholder className="login-block__form">
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column className="login-block__logo" verticalAlign="middle">
            <div>
              <img src={tgaLogo} className="logo tga" alt="TGA logo" />
            </div>
            <h2>THE GIVING APP</h2>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
                type="username"
                name="username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                placeholder="Password"
                type="password"
                name="password"
              />
              <Button type="submit">Login</Button>
            </Form>
            {/*<br />
                        <br />
                        <span>
                            {isInvalid ? (
                                <span>Hello {getProfile?.Name}
                                    <br />
                                    Login Details Matched {isInvalid}
                                </span>
                            ) : (
                                <span>Invalid login details</span>
                            )}
                        </span>*/}
          </Grid.Column>
        </Grid>

        <Divider vertical></Divider>
      </Segment>
    </div>
  );
}
