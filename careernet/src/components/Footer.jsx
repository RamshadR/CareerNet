import React from "react";
import { FaAngleUp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import "./CSS/Footer.css";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="FfooterContainer">
      <div className="Fcontainer">
        <div className="Ffooter-Box1">
          <div className="FfooterLogodiv">
            <img
              className="FfooterLogo"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/10/CN_Logo_With_R_Dark_Background.png"
              alt="Careernet Logo"
            />
            <div className="FfooterBox-MenuContainer">
              <div className="footerBox1-menu1">
                <h6 className="FmenuTitle">
                  <a
                    className="FmenuTitle"
                    href="https://careernet.in/about-us/"
                  >
                    About Us
                  </a>
                </h6>
                <div className="FmenuOptions">
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/about-us/#overview"
                    >
                      Overview
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/about-us/#Why-Careernet"
                    >
                      Why Careernet
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/about-us/#Journey"
                    >
                      Our Journey
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/about-us/#Leadership"
                    >
                      Leadership
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/about-us/#Locations"
                    >
                      Locations
                    </a>
                  </p>
                </div>
              </div>
              <div className="FfooterBox1-menu2">
                <h6 className="FmenuTitle">
                  <a
                    className="FmenuTitle"
                    href="https://careernet.in/expertise/"
                  >
                    Expertise
                  </a>
                </h6>
                <div className="FmenuOptions">
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/expertise/#Industries"
                    >
                      Industries
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/expertise/#Campus"
                    >
                      Campus to Boardroom
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/expertise/#Ai"
                    >
                      AI Powered Hiring
                    </a>
                  </p>
                </div>
              </div>
              <div className="FfooterBox1-menu3">
                <h6 className="FmenuTitle">
                  <a
                    className="FmenuTitle"
                    href="https://careernet.in/about-us/#Locations"
                  >
                    Solutions
                  </a>
                </h6>
                <div className="FmenuOptions">
                  <p>
                    <a className="Fanimation2" href="https://careernet.in/rpo/">
                      RPO
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/permanent-hiring/"
                    >
                      Permanent Hiring
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/professional-staffing/"
                    >
                      Professional Staffing
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/leadership-hiring/"
                    >
                      Leadership Hiring
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/diversity-and-inclusion/"
                    >
                      Diversity &amp; Inclusion
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/digital-first-hiring/"
                    >
                      Digital First Hiring
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/talent-branding/"
                    >
                      Talent Branding
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/research-consulting/"
                    >
                      Research &amp; Consulting
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/career-transitions/"
                    >
                      Career Transitions
                    </a>
                  </p>
                </div>
              </div>
              <div className="FfooterBox1-menu4">
                <h6 className="FmenuTitle">
                  <a
                    className="FmenuTitle"
                    href="https://careernet.in/thought-center/"
                  >
                    Thought Centre
                  </a>
                </h6>
                <div className="FmenuOptions">
                  <p>
                    <a className="Fanimation2" href="https://careernet.in/news/">
                      News
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/resources/"
                    >
                      Resources
                    </a>
                  </p>
                  <p>
                    <a
                      className="Fanimation2"
                      href="https://careernet.in/reports/"
                    >
                      Reports
                    </a>
                  </p>
                </div>
                <h6 className="Fcondition">
                  <a
                    className="FmenuTitle2"
                    href="https://careernet.in/contact-us/"
                  >
                    Contact us
                  </a>
                </h6>
                <h6 className="FmenuTitle2">Join Us</h6>
              </div>
            </div>
          </div>

          <div className="FcareerBox">
            <h6 className="Ftechnology">Careernet Technologies Pvt. Ltd.</h6>

            <div>
              Careernet Campus, Plot No. 53,
              <br />
              Kariyammana Agrahara Road, Devarabisana <br />
              Halli (Next to Intel Junction Flyover),
              <br />
              Outer Ring Road, Bangalore - 560 103
              <br />
              <span className="Fphonee">
                <span className="Fcall">Phone:</span> +91-80-66560000
              </span>
            </div>
            <p>
              <span className="Fphonee-email">
                <span className="Femail">Email:</span>
                <a className="Femailid" href="mailto:sales@careernet.in">
                  sales@careernet.in
                </a>
              </span>
            </p>
            <p>
              <span>
                Follow us
                <a
                  href="https://www.facebook.com/careernetconsulting/"
                  rel="noopener"
                >
                  <i className="Ficon-facebook"></i>  <FaFacebook />
                </a>
                <a href="https://twitter.com/CareernetC" rel="noopener">
                  <i className="Ficon-twitter"><FaTwitter/></i>
                </a>
                <a
                  href="https://www.instagram.com/careernetconsulting/"
                  rel="noopener"
                >
                  <i className="Ficon-instagram"><FaInstagram/></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/careernet-consulting"
                  rel="noopener"
                >
                  <i className="Ficon-linkedin"></i><FaLinkedin/>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCcZeB6yJjvS4LlL1cO3KL-g"
                  rel="noopener"
                >
                  <i className="Ficon-youtube"></i><FaYoutube/>
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="Ffooter2">
          <div className="Fbootom-footer">
            <div className="Ffooter-terms">
              <p className="Fcondition-footer">
                <a
                  className="Fbottom-footerMenu"
                  href="https://careernet.in/terms-of-services/"
                >
                  Terms of Services
                </a>
              </p>
              <p>
                <a
                  className="Fbottom-footerMenu"
                  href="https://careernet.in/privacy-policy/"
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  className="Fbottom-footerMenu"
                  href="https://careernet.in/cookies-policy/"
                >
                  Cookies Policy
                </a>
              </p>
              <p>
                <a
                  className="Fbottom-footerMenu"
                  href="https://careernet.in/csr/"
                >
                  CSR Policy
                </a>
              </p>
              <p>
                <a
                  className="Fbottom-footerMenu"
                  href="https://careernet.in/disclaimer/"
                >
                  Disclaimer
                </a>
              </p>
              <div className="Fcopyright">
                @2024 Careernet. All rights reserved
              </div>

              <button className="Fscroll-up-arrow" onClick={scrollTop}>
                <FaAngleUp />
              </button>
            </div>
          </div>
          <div className="Fbottom-footer-p">
            <p>
              Please note that Careernet does not practice charging a placement
              fee from any job seeker across profiles. Word of caution to the
              fraudulent news and <br /> information, if anyone demands any kind
              of charges from you, in the name of Careernet Consulting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
