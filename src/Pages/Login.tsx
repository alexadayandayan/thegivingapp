import { Button, Form, Grid, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <script src="//daybrush.github.io/scenejs/release/latest/scene.js"></script>
          <script
            src="../src/assets/scripts.js"
            type="module"
            crossorigin="anonymous"
            defer
          ></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Meddon&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="background">
          <div className="flower roundpetal petal5 flower1">
            <div className="petal">
              <div className="petal">
                <div className="petal">
                </div>
              </div>
            </div>
          </div>
          <div className="flower roundpetal petal5 flower2 blueflower">
            <div className="petal">
              <div className="petal">
                <div className="petal">
                </div>
              </div>
            </div>
          </div>
          <div className="flower roundpetal petal5 flower3 yellowflower">
            <div className="petal">
              <div className="petal">
                <div className="petal">
                </div>
              </div>
            </div>
          </div>
          <div className="flower roundpetal petal5 flower4 purpleflower">
            <div className="petal">
              <div className="petal">
                <div className="petal">
                </div>
              </div>
            </div>
          </div>
          <div className="slope"></div>
          <div className="tree">
            <div className="leaf leaf1"></div>
            <div className="leaf leaf2"></div>


            <div className="branch left branch1">
              <div className="branch left branch-inner1">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>                
                <div className="leaf leaf3"></div>
                <div className="heart flower1 blueflower">
                </div>
              </div>
              <div className="branch left branch-inner2">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>                
                <div className="leaf leaf3"></div>
                <div className="tulip flower1 redflower">
                  <div className="peak"></div>
                </div>
              </div>
              <div className="branch left branch-inner3">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>
              </div>
              <div className="flower petal5 flower1 redflower">
                <div className="petal">
                  <div className="petal">
                    <div className="petal">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="branch right branch2">
              <div className="branch left branch-inner1">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>        
                <div className="leaf leaf3"></div>
                <div className="flower petal5 flower1 blueflower">
                  <div className="petal">
                    <div className="petal">
                      <div className="petal">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="branch right branch-inner2">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>                
                <div className="leaf leaf3"></div>
                <div className="tulip flower1 greenflower">
                  <div className="peak"></div>
                </div>
              </div>
              <div className="branch right branch-inner3">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>
                <div className="leaf leaf3"></div>
                <div className="branch left branch-inner4">
                  <div className="leaf leaf1"></div>
                  <div className="flower petal5 flower1 yellowflower">
                    <div className="petal">
                      <div className="petal">
                        <div className="petal">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tulip flower1 purpleflower">
                  <div className="peak"></div>
                </div>
              </div>
              <div className="flower petal5 roundpetal flower1">
                <div className="petal">
                  <div className="petal">
                    <div className="petal">
                      <div className="petal">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="branch left branch3">
              <div className="branch right branch-inner1">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>                
                <div className="leaf leaf3"></div>
                <div className="heart flower1">
                </div>
              </div>
              <div className="branch left branch-inner2">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>                
                <div className="leaf leaf3"></div>
                <div className="tulip flower1">
                  <div className="peak"></div>
                </div>
              </div>
              <div className="leaf leaf1"></div>
              <div className="leaf leaf2"></div>
              <div className="flower roundpetal petal5 flower1 purpleflower">
                <div className="petal">
                  <div className="petal">
                    <div className="petal">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="branch right branch4">
              <div className="branch left branch-inner1">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>        
                <div className="leaf leaf3"></div>
                <div className="flower petal5 flower1 yellowflower">
                  <div className="petal">
                    <div className="petal">
                      <div className="petal">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="branch right branch-inner2">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>                
                <div className="leaf leaf3"></div>
                <div className="tulip tulip1 flower1 purpleflower">
                  <div className="peak"></div>
                </div>
              </div>
              <div className="flower petal5 roundpetal flower1">
                <div className="petal">
                  <div className="petal">
                    <div className="petal">
                      <div className="petal">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="branch left branch5">
              <div className="branch right branch-inner1">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>                
                <div className="leaf leaf3"></div>
                <div className="heart flower1">
                </div>
              </div>
              <div className="branch left branch-inner2">
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>                
                <div className="leaf leaf3"></div>
                <div className="tulip flower1 greenflower">
                  <div className="peak"></div>
                </div>
              </div>
              <div className="flower roundpetal petal5 flower1 blueflower">
                <div className="petal">
                  <div className="petal">
                    <div className="petal">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <Segment placeholder className="login-block__form">
          <Grid>
            <Grid.Column verticalAlign="middle">
              <h2>The Giving App</h2>
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

        </Segment>
      </div>
    )
  );
}
