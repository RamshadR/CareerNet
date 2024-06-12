import React from "react";
import "../Home/Words.css";

const Words = () => {
  return (
    <div className="wordContainer">
      <div>
        <h3 className="Title">
          <span>A word from those</span> we <i>made it happen</i>
          <span>for </span>
        </h3>
        <div className="wordWrap">
          <div  id="wordbox1"  className="wordBox">
            <div className="paragraphText">
            <p>
              The Careernet team has extensive experience <br/> in assessing
              candidates for leadership roles. The project was critical, and
              they did a commendable job by identifying top talent for all our
              leadership roles.
            </p>
            </div>
            <div className="positionOfPerson">
              <h6>Head of HR</h6>
            </div>
            <div className="customer">Global Retail MNC, USA</div>
          </div>
      
        <div className="wordBox">
          <div className="box2paratext">
          <p>
            Careernet has been a pioneer in hiring for analytics and decision
            sciences skills. They exhibit strong capabilities in understanding
            the market dynamics, provide extensive insights and help you to hire
            the right candidates.
          </p>
          </div>
          <div className="positionOfPerson">
            <h6>AVP, Talent Acquisition</h6>
          </div>
          <div className="customer">Global Banking Company</div>
        </div>
        <div className="wordBox">
        <div className="box2paratext">
          <p>
            Well done team Careernet! We got the best available talent in a
            short span of time for our requirements.
          </p>
          </div>
          <div className="positionOfPerson">
            <h6>Asst. Manager, HR</h6>
          </div>
          <div className="customer">Leading Manufacturing Company</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Words;
