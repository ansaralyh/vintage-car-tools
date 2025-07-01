import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageLayout from "./components/home-page-layout/home-page-layout";

import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomePageLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
