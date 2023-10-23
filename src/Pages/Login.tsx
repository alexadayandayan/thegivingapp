import tgaLogo from "../assets/TGA.png";
import { Button, Form, Grid, Segment, Divider } from "semantic-ui-react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function Login() {
  let navigate = useNavigate();
  const [isInvalid, setIsInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const verify = () => {
    if (window.api.isLoggedIn()) {
      navigate("/dashboard");
    }
  };

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    const username = form?.username?.value;
    const password = form?.password?.value;

    // Set a loading state before making the API call
    setLoading(true);
    try {
      await window.api.login({ username, password });
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Error with login data:", error);
      setIsInvalid(true);
    } finally {
      // Reset the loading state whether the call succeeds or fails
      setLoading(false);
      setIsInvalid(false);
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    loading ? (
      <div className="loader-wrapper">
        <span className="loader"></span>
      </div>
    ) : (    
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
              <p className="text-center text-red">{isInvalid ? "There's an error in your login details. Please try again." : ""}</p>
              <Form  onSubmit={handleSubmit}>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  placeholder="Username"
                  type="username"
                  name="username"
                  required
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  required
                />
                <Button type="submit">Login</Button>
              </Form>
            </Grid.Column>
          </Grid>

          <Divider vertical></Divider>
        </Segment>
      </div>
    )
  );
}
