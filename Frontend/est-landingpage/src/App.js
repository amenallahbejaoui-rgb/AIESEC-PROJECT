import "./App.css";
import Footer from "./Layout/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Views/Homepage/Homepage";
import ProductsGv from "./Views/Products/ProductGv";
import ProductsGta from "./Views/Products/ProductGta";
import ProductsGTe from "./Views/Products/ProductGTe";
import ContactUs from "./Views/ContactUs/ContactUs";
import { useEffect, useState } from "react";
import Blogs from "./Views/BlogPage/Blogs";
import Login from "./Views/Admin/Components/Login";
import AdminTabs from "./Views/Admin/Components/AdminTabs";
import { useSelector } from "react-redux";
import { selectLogged } from "./Store/Slices/AuthSlice";
import BlogDetails from "./Views/BlogPage/Components/BlogDetails";
import Membership from "./Views/Membership/Membership";
import Events from "./Views/EventsPage/Events";
import EventsDetails from "./Views/EventsPage/Components/EventsDetails";
import AboutUs from "./Views/AboutUs/AboutUs";
import BeOurPartner from "./Views/ContactUs/BeOurPartner";
import Navigationbar from "./Layout/Navigationbar";

function App() {
  const [navbarC, setNavbarC] = useState(true);
  const [inAdmin, setInAdmin] = useState(false);
  const logged = useSelector(selectLogged);
  function changeColor() {
    setNavbarC(false);
  }
  function changeInAdmin(state) {
    setInAdmin(state);
  }

  return (
    <BrowserRouter>
      <div className="App">
        {!inAdmin ? <Navigationbar navbarC={navbarC} /> : <></>}
        <Routes>
          <Route path="" Component={Homepage} />
          <Route
            path="/aboutus"
            element={<AboutUs callBack={() => changeColor()} />}
          />
          <Route
            path="/gv"
            element={<ProductsGv callBack={() => changeColor()} />}
          />
          <Route
            path="/gta"
            element={<ProductsGta callBack={() => changeColor()} />}
          />
          <Route
            path="/gte"
            element={<ProductsGTe callBack={() => changeColor()} />}
          />
          <Route
            path="/membership"
            element={<Membership callBack={() => changeColor()} />}
          />
          <Route
            path="/blogs"
            element={<Blogs callBack={() => changeColor()} />}
          />
          <Route
            path="/blogs/:blogId"
            element={<BlogDetails callBack={() => changeColor()} />}
          />
          <Route
            path="/events"
            element={<Events callBack={() => changeColor()} />}
          />
          <Route
            path="/events/:eventId"
            element={<EventsDetails callBack={() => changeColor()} />}
          />
          <Route
            path="/contact"
            element={<ContactUs callBack={() => changeColor()} />}
          />
          <Route
            path="/beourpartner"
            element={<BeOurPartner callBack={() => changeColor()} />}
          />
          <Route
            path="/jobfair"
            element={<JobFair callBack={() => changeColor()} />}
          />
          <Route path="/admin">
            <Route index element={<Login callBack={changeInAdmin} />} />
            {logged ? (
              <>
                <Route
                  path="tabs"
                  element={<AdminTabs callBack={changeInAdmin} />}
                />
                <Route path="*" element={<Navigate to="" />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Route>
          <Route path="*" element={<Navigate to="" />} />
        </Routes>
        {!inAdmin ? <Footer /> : <></>}
      </div>
    </BrowserRouter>
  );
}

export default App;
