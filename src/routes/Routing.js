import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { English } from "../componments/English";
import { Home } from "../componments/Home";
import { Swedish } from "../componments/Swedish";

export const Routing = (props) => {
  return (
    <Router>
      {props.children}
      <Routes>
        <Route exact path="/swedish" element={<Swedish />} />
        <Route exact path="/english" element={<English />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
