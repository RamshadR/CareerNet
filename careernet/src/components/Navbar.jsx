import React, { useState } from "react";
import "./CSS/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="navbarcontainer">
        <Link to="/">
        <img
          className="logo"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,h_840/https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/10/CN_Logo_With_TM.png"
          alt="logo"
        />
        </Link >
        <div className={`navComponents ${showMenu ? "show" : ""}`}>
          <div className="menu-toggle" onClick={toggleMenu}>
            {!showMenu ? (
              <div className="menu-icon">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            ) : (
              <div className="close-icon">×</div>
            )}
          </div>
          <ul>
            
              <li>
                <Link className="Link" to="/aboutus">
                  ABOUT US
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/aboutus/overview">Overview</Link>
                  </li>
                  <li>
                    <Link to="/aboutus/why">Why Careernet</Link>
                  </li>
                  <li>
                    <Link to="/aboutus/journey">Our Journey</Link>
                  </li>
                  <li>
                    <Link to="/aboutus/leadership">Leadership</Link>
                  </li>
                  <li>
                    <Link to="/aboutus/locations">Locations</Link>
                  </li>
                </ul>
              </li>
            

            <li>
            <Link className="Link" to="/expertise">
                  EXPERTISE
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/expertise/overview">Industries</Link>
                  </li>
                  <li>
                    <Link to="/expertise/why">Campus to Boardroom</Link>
                  </li>
                  <li>
                    <Link to="/expertise/journey">AI Powered Hiring</Link>
                  </li>
                  </ul>
            </li>
            <li>
            <Link className="Link" to="/solutions">
                SOLUTIONS
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/solutions/rpo">RPO</Link>
                  </li>
                  <li>
                    <Link to="/solutions/permenant">Permenent Hiring</Link>
                  </li>
                  <li>
                    <Link to="/solutions/staffing">Professional Staffing</Link>
                  </li>
                  <li>
                    <Link to="/solutions/leadership">Leadership Hiring</Link>
                  </li>
                  <li>
                    <Link to="/solutions/diversity">Diversity & Inclusion</Link>
                  </li>
                  <li>
                    <Link to="/solutions/digital">Digital First Hiring</Link>
                  </li>
                  <li>
                    <Link to="/solutions/talent">Talent Branding</Link>
                  </li>
                  <li>
                    <Link to="/solutions/research">Research & Consulting</Link>
                  </li>
                  <li>
                    <Link to="/solutions/career">Career Transitions</Link>
                  </li>
                </ul>
            </li>
            <li>
            <Link className="Link" to="/thought">
            THOUGHT CENTRE
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/thought/news">News</Link>
                  </li>
                  <li>
                    <Link to="/thought/resources">Resources</Link>
                  </li>
                  <li>
                    <Link to="/thought/reports">Reports</Link>
                  </li>
                  </ul>
            </li>
            <li>
            <Link className="Link" to="/contactus">
            CONTACT US
                </Link></li>
            <li>
              <Link  className="Link" to="/joinus">JOIN US</Link></li>
            <li id="candidates"><a href="https://mycareernet.in/">CANDIDATES</a></li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
