import React, { useState } from "react";
import "./JoinUsForm.css";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import ReCAPTCHA from "react-google-recaptcha";

const JoinUsForm = () => {
  const [values, setValues] = useState({
    yourName: "",
    email: "",
    dob: "",
    phoneNumber: "",
    companyName: "",
    designation: "",
    experience: "",
    currentLocation: "",
    preferredLocation: "",
    education: "",
    specialisation: "",
    cgpa: "",
    collagename: "",
    yearofpassing: "",
    pesentage12th: "",
    yearofpassing12: "",
    pesentage10th: "",
    yearofpassing10: "",
  });

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

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.yourName &&
      values.email &&
      values.dob &&
      values.phoneNumber &&
      values.companyName &&
      values.designation &&
      values.experience &&
      values.currentLocation &&
      values.preferredLocation &&
      values.education &&
      values.specialisation &&
      values.cgpa &&
      values.collagename &&
      values.yearofpassing &&
      values.pesentage12th &&
      values.yearofpassing12 &&
      values.pesentage10th &&
      values.yearofpassing10
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
  };
  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="Form-Box">
            {submitted && valid && (
              <div className="success-message">
                <h1 className="success-title">Thank You!</h1>
                <div>
                  <h3 className="success-text">
                    Your form has been successfully submitted. We’ll go through
                    the details and get back to you.
                  </h3>
                </div>
              </div>
            )}
            <h1 className="join-headlight">Join Us</h1>
            {!valid && (
              <input
                className="form-field"
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
                className="form-field"
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
                className="form-field"
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
                className="form-field"
                type="date"
                placeholder="Date of Birth"
                name="dob"
                value={values.dob}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.dob && (
              <span className="error">Please enter DOB</span>
            )}

            {!valid && (
              <input
                className="form-field"
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
                className="form-field"
                type="text"
                placeholder="Designation"
                name="designation"
                value={values.designation}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.designation && (
              <span className="error">Please enter designation</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Experience"
                name="experience"
                value={values.experience}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.experience && (
              <span className="error">Please enter experience</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="CurrentLocation"
                name="currentLocation"
                value={values.currentLocation}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.currentLocation && (
              <span className="error">Please enter currentLocation</span>
            )}

            {!valid && (
              <select
                id="form-field"
                placeholder="Bangalor"
                name="preferredLocation"
                value={values.preferredLocation}
                onChange={handleInputChange}
              >
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Noida">Noida</option>
                <option value="Pune">Pune</option>
              </select>
            )}

            {submitted && !values.preferredLocation && (
              <span className="error">Please select preferred location</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Highest educational qualification"
                name="education"
                value={values.education}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.education && (
              <span className="error">Please enter education</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Specialisation"
                name="specialisation"
                value={values.specialisation}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.specialisation && (
              <span className="error">Please enter specialisation</span>
            )}
            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="CGPA/Percentage"
                name="cgpa"
                value={values.cgpa}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.cgpa && (
              <span className="error">Please enter specialisation</span>
            )}
            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Collage name"
                name="collagename"
                value={values.collagename}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.collagename && (
              <span className="error">Please enter collagename</span>
            )}
            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Year of passing highest degree"
                name="yearofpassing"
                value={values.yearofpassing}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.yearofpassing && (
              <span className="error">Please enter year of passing degree</span>
            )}
            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Percentage obtained in 12th standard"
                name="pesentage12th"
                value={values.pesentage12th}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.pesentage12th && (
              <span className="error">
                Please enter Percentage obtained in 12th
              </span>
            )}
            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Year of passing 12th standard"
                name="yearofpassing12"
                value={values.yearofpassing12}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.yearofpassing12 && (
              <span className="error">Please enter Year of passing 12th</span>
            )}
            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Percentage obtained in 10th standard"
                name="pesentage10th"
                value={values.pesentage10th}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.pesentage10th && (
              <span className="error">
                Please enter Percentage obtained in 10th
              </span>
            )}
            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Year of passing 10th standard"
                name="yearofpassing10"
                value={values.yearofpassing10}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.yearofpassing10 && (
              <span className="error">Please enter Year of passing 10th</span>
            )}
          </div>
          <div className="file-add-container">
            <h4>Upload Resume</h4>
            <input
              size="40"
              className="add-File"
              accept=".pdf,.doc,.docx"
              aria-required="true"
              aria-invalid="false"
              type="file"
              name="file-10"
              onChange={handleFileChange}
            />
          </div>
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

      <Footer />
    </div>
  );
};

export default JoinUsForm;
