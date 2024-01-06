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

function Footer() {
  return (
    <>
      <div className="bg">
        <div className="footer mt-4">
          <div className="contain d-flex flex-column justify-content-center align-items-center gap-2 mt-4">
            <div className="header d-flex gap-2 bg-transparent ">
              <h5 className="bg-transparent">&copy;2024 X-Rental</h5>
            </div>
            <div className="icons d-flex gap-3 bg-transparent mb-4">
              <a href="#" className="instagram" title="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "2em" }}
                />
              </a>
              <a href="#" className="facebook" title="facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: "2em" }}
                />
              </a>
              <a href="#" className="github" title="GitHub">
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "2em" }} />
              </a>
              <a href="#" className="twitter" title="X-Twitter">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  style={{ fontSize: "2em" }}
                />
              </a>
            </div>
            <Link
              className="link text-decoration-none bg-transparent"
              to="/contact"
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
