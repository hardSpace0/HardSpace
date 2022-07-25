import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/hero/hero";
import About from "./Apps/About/about"
import Destinations from "./Apps/Destinations/Destinations";
import Blogs from "./Apps/Blogs/Blogs";
import Slideshow from './components/Slideshow/Slidershow'
import Footer from "./components/Footer/footer";
import FAQ from "./Apps/FAQ/faq"
import Contact from "./Apps/ContactUs/contact";
import Scrolling from "./Apps/Scrolling/Scrolling";
import Login from "./Apps/login/login.jsx";
import Administrator from "./Apps/login/Administrator"
import Registration from "./Apps/login/registration"
import TourPage from "./Apps/TourPage/TourPage";
import Booking from "./Apps/reserve/Booking"
import Person from "./Apps/login/person";
import MessengerCustomerChat from "react-messenger-customer-chat"
import AddBlog from "./Apps/Blogs/AddBlog";
import Services from "./Apps/Services/Services"
import Search from "./components/hero/search"

function App() {
  return (
    <Router>
      <div className="App">
        <Scrolling />
        <Navbar />
        <Routes>
          <Route path="/" element=
            {
              <>
                <Hero />
                <Services />
                <Slideshow />
                <Destinations />
              </>
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Destinations" element={<Destinations />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Administrator" element={<Administrator />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Tour/:id" element={<TourPage />} />
          <Route path="/Booking/:id" element={<Booking />} />
          <Route path="/profile" element={<Person />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/search/:str" element={<Search />} />

        </Routes>
        <MessengerCustomerChat
          pageId="100727429350443"
          appId="1392782954521327"
        />,
        <Footer />
      </div>
    </Router >
  );
}

export default App;
