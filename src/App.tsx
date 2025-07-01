import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageLayout from "./components/home-page-layout/home-page-layout";

import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import Home from "./pages/home/home";
import Tours from "./pages/tours/tours";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Bookings from "./pages/bookings/bookings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={<HomePageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="tours" element={<Tours />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="bookings" element={<Bookings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
