import DashboardSidebar from "../Components/DashboardSidebar";
import { Grid, Icon, Table, Button, Message, Header, Image, Confirm } from "semantic-ui-react";
import { useNavigate } from "react-router";
import { IMember } from "../Data/member";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

export default function Members() {
  let navigate = useNavigate();
  const [data, setData] = useState<IMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedID, setSelectedID] = useState(null);
  const [notificationStatus, setNotificationStatus] = useState("");
  
  const getAllMembers = async () => {
    // Set a loading state before making the API call
    setLoading(true);
    try {
      const members = (await window.api.getMembers()) as IMember | any;
      setData(members);
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Error fetching data:", error);
    } finally {
      // Reset the loading state whether the call succeeds or fails
      setLoading(false);
    }
  };

  const onMemberAdd = () => {
    navigate("/member-add");
  };

  const handleDelete = async () => {
    // Set a loading state before making the API call
    setLoading(true);
    try {
      await window.api.deleteMember(selectedID);      
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Failed in entry deletion due to the following error: " + error);
    } finally {
      // Reset the loading state whether the call succeeds or fails
      setLoading(false);
      setShowPopup(false);
      getAllMembers();
      setNotificationStatus('success');
    }
  };

  const handleConfirmDelete = (e: { currentTarget: { id: React.SetStateAction<null>; }; }) => {
    setShowPopup(true);
    setSelectedID(e.currentTarget.id);
  }

  useEffect(() => {
    getAllMembers();
  }, []);

  
  const itemsPerPage = 10;
  const [hasMore, setHasMore] = useState(data.length < itemsPerPage ? false : true);
  const [records, setrecords] = useState(itemsPerPage);
  const showItems = (posts: string | any[]) => {
    var items = [];  
    if(posts.length) {
      for (var i = 0; i < records; i++) {      
        if(posts[i] != undefined) {
          items.push(
            <Table.Row key={"uniqueId" + posts[i]['Id']}>
              <Table.Cell selectable>
                <Link to="/member-view">
                  <Header as="h4" image>
                    {posts[i]['Gender'] === "female" ? (
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
                    <Header.Content>{posts[i]['Firstname'] + " " + posts[i]['Lastname']}</Header.Content>
                  </Header>
                </Link>
              </Table.Cell>
              <Table.Cell selectable positive>
                <Link to={`/member-edit/${posts[i]['Id']}`}>
                  <Icon name='pencil' />
                </Link>
              </Table.Cell>
              <Table.Cell selectable negative>
                <Link
                  id={posts[i]['Id']}
                  to="/members"
                  onClick={handleConfirmDelete}
                >
                  <Icon name='close' />
                </Link>
              </Table.Cell>
            </Table.Row>
          );  
        }        
      }
    }
    return items;
  };
  const loadMore = () => {
    if (records === data.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setrecords(records + itemsPerPage);
      }, 2000);
    }
  };

  return (
    <div>
      <DashboardSidebar />
      <Grid className="px-4 py-2">
        <Grid.Column>
          <div className="header-block">
            <Grid columns="equal">
              <Grid.Column>
                <h3>Members</h3>
              </Grid.Column>
              <Grid.Column>
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                  onClick={onMemberAdd}
                >
                  <Icon name="user" /> Add Member
                </Button>
              </Grid.Column>
            </Grid>

            {notificationStatus && 
              (notificationStatus === "success" ? (
                <Message              
                  success
                  header='Deletion Status'
                  content="Member is successfully deleted."
                />
              ) : (
                <Message              
                  negative
                  header='Deletion Status'
                  content="Failed in member deletion."
                />
              )
            )}
          </div>
          
          {loading ? (
            <div className="loader-wrapper">
              <span className="loader"></span>
            </div>
          ) : (              
            <div className="content-wrapper">
              <Confirm
                open={showPopup}
                header='Confirm entry deletion'
                onCancel={() => {setShowPopup(false); setNotificationStatus('')}}
                onConfirm={handleDelete}
              />   
              <InfiniteScroll
                  pageStart={0}
                  loadMore={loadMore}
                  hasMore={hasMore}
                  loader={<span className="loader"></span>}
                  useWindow={false}
                >
                <Table size="large" celled fixed selectable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell colSpan="2">Actions</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {showItems(data)}
                  </Table.Body>
                </Table>
              </InfiniteScroll>
            </div>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
}
