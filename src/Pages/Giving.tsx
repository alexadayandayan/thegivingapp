import DashboardSidebar from "../Components/DashboardSidebar";
import React, { useState, useEffect } from "react";
import { Button, Grid, Icon, Table, Confirm, Message } from "semantic-ui-react";
import { IGiving } from "../Data/giving";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { format } from 'date-fns';
import InfiniteScroll from "react-infinite-scroller";

const Giving: React.FC = () => {
  let navigate = useNavigate();
  const [data, setData] = useState<IGiving[]>([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedID, setSelectedID] = useState(null);
  const [notificationStatus, setNotificationStatus] = useState("");


  const getOfferings = async () => {
    // Set a loading state before making the API call
    setLoading(true);
    try {
      const giving = (await window.api.getOfferings()) as IGiving | any;
      setData(giving);
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Error fetching data:", error);
    } finally {
      // Reset the loading state whether the call succeeds or fails
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    // Set a loading state before making the API call
    setLoading(true);
    try {
      await window.api.deleteOffering(selectedID);      
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Failed in entry deletion due to the following error: " + error);
    } finally {
      // Reset the loading state whether the call succeeds or fails
      setLoading(false);
      setShowPopup(false);
      getOfferings();
      setNotificationStatus('success');
    }
  };

  const handleConfirmDelete = (e: { currentTarget: { id: React.SetStateAction<null>; }; }) => {
    setShowPopup(true);
    setSelectedID(e.currentTarget.id);
  }

  const onGivingAdd = () => {
    navigate("/giving-add");
  };

  useEffect(() => {
    getOfferings();
  }, []);

  const itemsPerPage = 10;
  const [hasMore, setHasMore] = useState(data.length > itemsPerPage ? false : true);
  const [records, setrecords] = useState(itemsPerPage);
  const showItems = (posts: string | any[]) => {
    var items = [];    
    if(posts.length) {
      for (var i = 0; i < records; i++) {    
        if(posts[i] != undefined) {
          items.push(
            <Table.Row key={"uniqueId" + posts[i]['Id']}>
              <Table.Cell>{posts[i]['Firstname']}</Table.Cell>
              <Table.Cell>{posts[i]['Tithe']}</Table.Cell>
              <Table.Cell>{posts[i]['BuildingFund']}</Table.Cell>
              <Table.Cell>{posts[i]['BestGift']}</Table.Cell>
              <Table.Cell>{posts[i]['FEBC700']}</Table.Cell>
              <Table.Cell>{posts[i]['GiftForPastor']}</Table.Cell>
              <Table.Cell>{posts[i]['GiftForBrother']}</Table.Cell>
              <Table.Cell>{posts[i]['ChildrensMinistry']}</Table.Cell>
              <Table.Cell>{posts[i]['FlowerOrPlants']}</Table.Cell>
              <Table.Cell>{posts[i]['Youth']}</Table.Cell>
              <Table.Cell>{posts[i]['Dance']}</Table.Cell>
              <Table.Cell>{posts[i]['Meralco']}</Table.Cell>
              <Table.Cell>{posts[i]['Music']}</Table.Cell>
              <Table.Cell>{/*JSON.stringify(posts[i]['Others'])*/}</Table.Cell>
              <Table.Cell>{posts[i]['Total']}</Table.Cell>
              <Table.Cell>{format(new Date(posts[i]['EntryDate']), 'MM/dd/yyyy')}</Table.Cell>
              <Table.Cell selectable positive>
                <Link to={`/giving-edit/${posts[i]['Id']}`}>
                  <Icon name='pencil' />
                </Link>
              </Table.Cell>
              <Table.Cell selectable negative>
                <Link
                  id={posts[i]['Id']}
                  to="/giving"
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
    <>
      <DashboardSidebar />
      <Grid className="px-4 py-2">
        <Grid.Column>
          <div className="header-block">
            <Grid columns="equal">
              <Grid.Column>
                <h3>Giving for Today</h3>
              </Grid.Column>
              <Grid.Column>
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                  onClick={onGivingAdd}
                >
                  <Icon name="like" /> Add Giving Entry
                </Button>
              </Grid.Column>
            </Grid>
          </div>

          {notificationStatus && 
            (notificationStatus === "success" ? (
              <Message              
                success
                header='Deletion Status'
                content="Successful entry deletion."
              />
            ) : (
              <Message              
                negative
                header='Deletion Status'
                content="Failed in entry deletion."
              />
            )
          )}

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
                      <Table.HeaderCell>Entry Date</Table.HeaderCell>
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
    </>
  );
};

export default Giving;
