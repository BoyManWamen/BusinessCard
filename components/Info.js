import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src="../images/me.jpg" alt="Huy Hoang" />
      <h1 className="info--fullname">Huy Tien Hoang</h1>
      <h5 className="info--role">Computer Science and Engineering Student</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://boymanwamen.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          boymanwamen.github.io/Portfolio/
        </a>
      </p>
      <div className="info--buttons">
        <address>
          <a href="mailto:kevin.hoang389@gmail.com">
            {" "}
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/huy-hoang-b90a592a7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
