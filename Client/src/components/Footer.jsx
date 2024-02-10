import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <>
      <div className="bg">
        <div className="footer">
          <div className="contain d-flex flex-column justify-content-center align-items-center gap-4 mt-4">
            <div className="head gap-2 mb-3 d-flex justify-content-center align-items-start">
              <img src={logo} alt="Logo" />
              <h5 className="bg-transparent">
                &copy;{new Date().getFullYear()} X Rental. All rights reserved.
              </h5>
            </div>
            <div className="icons d-flex gap-3 bg-transparent mb-4">
              <Link to="#" className="instagram" title="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "2em" }}
                />
              </Link>
              <Link to="#" className="facebook" title="facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: "2em" }}
                />
              </Link>
              <Link
                to="https://github.com/AnthonyEmm/X-Rental-Apartments-Finder-"
                target="_blank"
                className="github"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "2em" }} />
              </Link>
              <Link to="#" className="twitter" title="X-Twitter">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  style={{ fontSize: "2em" }}
                />
              </Link>
            </div>
            <Link
              to="/contact"
              className="link text-decoration-none bg-transparent"
            >
              Need help? Contact us here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
