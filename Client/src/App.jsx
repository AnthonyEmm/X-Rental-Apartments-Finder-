
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
