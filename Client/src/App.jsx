import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Update from "./components/Update";
import Upload from "./components/Upload";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import PropertyDetails from "./components/PropertyDetails";
import PropertyList from "./components/PropertyList";
import ContactForm from "./components/contactForm";
import UserProfile from "./components/UserProfile";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="bg-color">
      <NavBar />
      <Routes>
        <Route path="/" element="" />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact" element={<ContactForm />} />

        <Route path="/" element={<Protected />}>
          <Route path="/list" element={<PropertyList />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/update" element={<Update />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
