import React, { useState } from "react";
import "../Navbar-Menu/ContactDetails.css";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const ContactDetails = () => {
  const [contact, setContact] = useState("Corporates");

  const [values, setValues] = useState({
    yourName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    const truncatedValue = value.slice(0, 10);
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
      [name + "Truncated"]: truncatedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.yourName &&
      values.phoneNumber &&
      values.email &&
      values.companyName &&
      values.message
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };
  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };

  return (
    <div>
      <div>
        <div className="location-btns">
          <button
            className="top-LocationBtn2"
            onClick={() => setContact("Corporates")}
          >
            Corporates
          </button>
          <button
            className="top-LocationBtn2"
            onClick={() => setContact("Candidates")}
          >
            Candidates
          </button>
          <button
            className="top-LocationBtn2"
            onClick={() => setContact("Workwithus")}
          >
            Work with us
          </button>
          <button
            className="top-LocationBtn2"
            onClick={() => setContact("Media")}
          >
            Media
          </button>
        </div>
      </div>

      {contact === "Corporates" && (
        <div className="corporates-Container">
          <img
            className="corporatesimg"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Website-banners-set-1_Contact-us_client.png"
            alt=""
          />
          <div className="corporate-form">
            <h3 className="corporate-title">
              <span>Request a </span>
              <i> Call back</i>
            </h3>
            <form onSubmit={handleSubmit}>
              {!valid && (
                <input
                  className="form-fieldc"
                  type="text"
                  placeholder="Your name"
                  name="yourName"
                  value={values.yourName}
                  onChange={handleInputChange}
                />
              )}

              {submitted && !values.yourName && (
                <span className="error">Please enter your name</span>
              )}
              {!valid && (
                <input
                  className="form-fieldc"
                  type="tel"
                  placeholder="Phone number"
                  name="phoneNumber"
                  value={values.phoneNumberTruncated}
                  onChange={handleInputChange}
                />
              )}
              {submitted && !values.phoneNumber && (
                <span className="error">Please enter phonenumber</span>
              )}

              {!valid && (
                <input
                  className="form-fieldc"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
              )}

              {submitted && !values.email && (
                <span className="error">Please enter an email address</span>
              )}
              {!valid && (
                <input
                  className="form-fieldc"
                  type="text"
                  placeholder="Company name"
                  name="companyName"
                  value={values.companyName}
                  onChange={handleInputChange}
                />
              )}
              {submitted && !values.companyName && (
                <span className="error">Please enter company name</span>
              )}
              {!valid && (
                <input
                  className="form-field-msg"
                  type="text"
                  placeholder="message"
                  name="message"
                  value={values.message}
                  onChange={handleInputChange}
                />
              )}
              {submitted && !values.message && (
                <span className="error">Please enter message</span>
              )}
              <div className="Captcha-joinus">
                <ReCAPTCHA
                  sitekey="I am not a robot"
                  onChange={handleRecaptchaChange}
                />
              </div>
              {!valid && (
                <button className="submitBtl" type="submit">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      )}

      {contact === "Candidates" && (
        <div className="candidate-Container">
          <img
            className="corporatesimg"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Website-banners-set-1_Contact-us_candidate.png"
            alt=""
          />
          <div className="candidate-para">
            <p className="cnt-paraa">
              Whether you're a fresher seeking your first job or a professional
              looking for the next step in your career, you've come to the right
              place. Explore limitless possibilities with MyCareernet - the
              ultimate destination for job seekers. Compete in hiring and prize
              challenges, attend curated career events, and uncover thousands of
              job opportunities from top employers.
            </p>
            <p>
              MyCareernet is an initiative by Careernet. With our vast
              experience in the recruitment industry, we help you find the right
              opportunities with top employers. We also help candidates from
              diverse communities discover inclusive workplaces that celebrate
              individuality. So what are you waiting for?
            </p>
            <p className="text-centerr">
              <a
                className="cant"
                href="https://mycareernet.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="candidate-Btn">Register</span>
              </a>
            </p>
            <br />
            <p>
              <b>
                Please note that Careernet does not practice charging a
                placement fee from any job seeker across profiles. Word of
                caution to the fraudulent news and information, if anyone
                demands any kind of charges from you, in the name of Careernet
                Consulting.
              </b>
            </p>
          </div>
        </div>
      )}
      {contact === "Workwithus" && (
        <div className="workwith-Container">
          <div className="column">
            <p className="paraa">
              Join our community of go-getters and become a part of our legacy
              of over two decades. People are our biggest asset and we offer a
              dynamic workplace that encourages employees to be their best
              selves. Interested in joining us to make success, happiness, and
              satisfaction happen? Click below
            </p>
            <p className="text">
              <Link className="Link" to="/joinus">
                <span className="candidate-Btn">Join us</span>
              </Link>
            </p>
            <br />
          </div>
        </div>
      )}
      {contact === "Media" && (
        <div className="corporates-Container">
          <img
            className="corporatesimg"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Website-banners-set-1_Contact-us_Media-1.png"
            alt=""
          />
          <div className="corporate-form">
            <h3 className="corporate-title">
              <span>Request a </span>
              <i> Call back</i>
            </h3>
            <form onSubmit={handleSubmit}>
              {!valid && (
                <input
                  className="form-fieldc"
                  type="text"
                  placeholder="Your name"
                  name="yourName"
                  value={values.yourName}
                  onChange={handleInputChange}
                />
              )}

              {submitted && !values.yourName && (
                <span className="error">Please enter your name</span>
              )}
              {!valid && (
                <input
                  className="form-fieldc"
                  type="tel"
                  placeholder="Phone number"
                  name="phoneNumber"
                  value={values.phoneNumberTruncated}
                  onChange={handleInputChange}
                />
              )}
              {submitted && !values.phoneNumber && (
                <span className="error">Please enter phonenumber</span>
              )}

              {!valid && (
                <input
                  className="form-fieldc"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
              )}

              {submitted && !values.email && (
                <span className="error">Please enter an email address</span>
              )}
              {!valid && (
                <input
                  className="form-fieldc"
                  type="text"
                  placeholder="Company name"
                  name="companyName"
                  value={values.companyName}
                  onChange={handleInputChange}
                />
              )}
              {submitted && !values.companyName && (
                <span className="error">Please enter company name</span>
              )}
              {!valid && (
                <input
                  className="form-field-msg"
                  type="text"
                  placeholder="message"
                  name="message"
                  value={values.message}
                  onChange={handleInputChange}
                />
              )}
              {submitted && !values.message && (
                <span className="error">Please enter message</span>
              )}
              <div className="Captcha-joinus">
                <ReCAPTCHA
                  sitekey="I am not a robot"
                  onChange={handleRecaptchaChange}
                />
              </div>
              {!valid && (
                <button className="submitBtl" type="submit">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
