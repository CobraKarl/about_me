import React from "react";
import ".//Swedish.css";
import ".//Home.css";
import MailLogo from "../shared/images/email.png";
import LinkedLinkedInLogo from "../shared/images/linked.png";
import GitLogo from "../shared/images/git.png";


export const Home = () => {
  return (
    <div>
      <h3 className="text">• Info!! •</h3>
      <div className="swe_erfarenhet">
        <div className="swe_company">
          <img className="logos" src={MailLogo}></img>
        </div>
        <br></br>
        <div classname="head"></div>
        <button
          className="text_mail"
          onClick={() => (window.location = "mailto:m.karlsson8@icloud.com")}
        >
          Mail Contact
        </button>
        <div classname="head">
          <p>Phone: +46 (0)768 24 10 53</p>
        </div>
      </div>
      <div className="swe_erfarenhet">
        <div className="swe_company">
          <img className="logos" src={LinkedLinkedInLogo}></img>
        </div>
        <div classname="head">
          <p>LinkedIn</p>
        </div>

        <a target="_blank" href="https://www.linkedin.com/in/mikaelkarlsson75/">
          My LinkedIn Page
        </a>
      </div>
      <div className="swe_erfarenhet">
        <div className="swe_company">
          <img className="logos" src={GitLogo}></img>
        </div>

        <div classname="head">
          <p>Github</p>
          <a target="_blank" href="https://github.com/CobraKarl">
            My GitHub Page
          </a>
        </div>
      </div>
    </div>
  );
};
