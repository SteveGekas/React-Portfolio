import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faLinkedin, fagithub } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../assets/resume.pdf"

library.add(fas);

function Footer() {
  return (

    <footer className="footer py-3 bg-light">
      <nav class="navbar navbar-default navbar-custom">
        <div className="container-fluid">
          <h6 className="find">Find me on &nbsp;
           <a
              href="https://www.linkedin.com/in/steven-gekas-894575141/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fas faLinkedin"]} />
            </a><i class="fab fa-linkedin"></i>

                    &nbsp;and &nbsp;
                    <a
              href="https://github.com/SteveGekas"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fas fagithub"]} />
            </a>
          </h6>

          <div className="nav-item nav-link dark">
            <a className="nav-item nav-link dark"
              href={Resume} download>Download my <u>Resume</u>
            </a>
          </div>
        </div>
      </nav>

    </footer >

  )
};
export default Footer;


