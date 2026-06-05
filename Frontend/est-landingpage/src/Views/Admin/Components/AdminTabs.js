import { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeLogged } from "../../../Store/Slices/AuthSlice";
import BlogTabs from "../Blogs/BlogTab";
import PartnerTab from "../Partners/PartnerTab";
import TestimonialsTab from "../Testimonials/TestimonialsTab";
import EventsTab from "../Events/EventsTab";
import FormResponses from "../FormResponses/FormResponses";

function AdminTabs(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    props.callBack(true);
  }, [dispatch]);

  return (
    <Tabs className="adminTabs">
      <TabList>
        <Tab>Blogs</Tab>
        <Tab>Partners</Tab>
        <Tab>Testimonials</Tab>
        <Tab>Events</Tab>
        <Tab>Form Responses</Tab>
        <Button
          onClick={() => {
            dispatch(changeLogged(false));
            props.callBack(false);
          }}
        >
          Logout
        </Button>
      </TabList>
      <TabPanel>
        <BlogTabs />
      </TabPanel>
      <TabPanel>
        <PartnerTab />
      </TabPanel>
      <TabPanel>
        <TestimonialsTab />
      </TabPanel>
      <TabPanel>
        <EventsTab />
      </TabPanel>
      <TabPanel>
        <FormResponses />
      </TabPanel>
    </Tabs>
  );
}
export default AdminTabs;
