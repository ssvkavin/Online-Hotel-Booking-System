import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Home from "./Home";
import Rooms from "./Rooms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms/:area" element={<Rooms />} />
      </Routes>
    </Router>
  );
}

export default App;
