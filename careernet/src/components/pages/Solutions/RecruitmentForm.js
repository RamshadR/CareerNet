import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./RecruitmentForm.css";

const RecruitmentForm = () => {
  const [values, setValues] = useState({
    yourName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [errors, setErrors] = useState({
    yourName: false,
    email: false,
    phoneNumber: false,
    companyName: false,
    message: false,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = { ...errors };

    
    Object.keys(values).forEach((key) => {
      if (!values[key]) {
        newErrors[key] = true;
        formValid = false;
      } else {
        newErrors[key] = false;
      }
    });

    setErrors(newErrors);

    if (formValid) {
      setValid(true);
      setSubmitted(true);
    } else {
      setValid(false); 
      setSubmitted(true);
    }
  };

  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="Form-Box">
          {submitted && valid ? (
            <div className="success-message">
              <h1 className="success-title">Thank You!</h1>
              <div>
                <h3 className="success-text">
                  Your form has been successfully submitted. We’ll go through
                  the details and get back to you.
                </h3>
              </div>
            </div>
          ) : (
            <div className="re-Form-Box">
              <h3 className="reform-heading">
                <span>Explore our</span> <i>recruitment process outsourcing solution</i>
              </h3>

              <input
                className="form-field"
                type="text"
                placeholder="Your name"
                name="yourName"
                value={values.yourName}
                onChange={handleInputChange}
              />
              {submitted && errors.yourName && (
                <span className="error">Please enter your name</span>
              )}

              <input
                className="form-field"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
              {submitted && errors.email && (
                <span className="error">Please enter an email address</span>
              )}

              <input
                className="form-field"
                type="tel"
                placeholder="Phone number"
                name="phoneNumber"
                value={values.phoneNumberTruncated}
                onChange={handleInputChange}
              />
              {submitted && errors.phoneNumber && (
                <span className="error">Please enter phone number</span>
              )}

              <input
                className="form-field"
                type="text"
                placeholder="Company name"
                name="companyName"
                value={values.companyName}
                onChange={handleInputChange}
              />
              {submitted && errors.companyName && (
                <span className="error">Please enter company name</span>
              )}

              <input
                className="mess-form-field"
                type="text"
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleInputChange}
              />
              {submitted && errors.message && (
                <span className="error">Please enter message</span>
              )}

              {!valid && (
                <div className="Captcha-joinus">
                  <ReCAPTCHA
                    sitekey="I am not a robot"
                    onChange={handleRecaptchaChange}
                  />
                </div>
              )}

              {!valid && (
                <button className="submitBtl" type="submit">
                  Submit
                </button>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default RecruitmentForm;
