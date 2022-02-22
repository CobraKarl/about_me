import React from "react";
import "./NavigationBar.css";
import PictureOfMe from "../shared/images/me.svg";

import { useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navigationBarWrapper">
      <img className="PictureOfMe" src={PictureOfMe}></img>

      <div className="textMe">
        <h1>Mikael Karlsson</h1>
      </div>

      <button onClick={() => navigate("/english")} className="englishButton">
        English CV
      </button>
      <button onClick={() => navigate("/swedish")} className="svenskButton">
        Svenskt CV
      </button>
      <button onClick={() => navigate("/")} className="homeButton">
        Home
      </button>
    </div>
  );
};
