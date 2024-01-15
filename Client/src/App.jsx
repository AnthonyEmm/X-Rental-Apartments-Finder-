import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Update from "./components/Update";
import Upload from "./components/Upload";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PropertyDetails from "./components/PropertyDetails";
import PropertyList from "./components/PropertyList";
import ContactForm from "./components/contactForm";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Protected from "./components/Protected";
import DeleteUserProfile from "./components/DeleteProfile";
import About from "./components/About";

function App() {
  return (
    <div className="bg-color">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact" element={<ContactForm />} />

        <Route path="/" element={<Protected />}>
          <Route path="/list" element={<PropertyList />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/:id" element={<UserProfile showOwner />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete-profile" element={<DeleteUserProfile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
