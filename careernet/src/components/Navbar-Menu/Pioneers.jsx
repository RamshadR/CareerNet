import React, { useState } from "react";
import "../Navbar-Menu/Pioneers.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pioneers = () => {
  const [pioneer, setPioeer] = useState("pioneer1");

  return (
    <div>
      <h3 className="pioneer-title">
        <span>The pioneers who</span> <i>make it happen</i>
      </h3>
      {pioneer === "pioneer1" && (
        <div className="pioneer-Container">
          <div className="cover2Expertise">
            <img
              className="coverpic2-Expertise"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_640,h_640/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff-new_M-1.png"
              alt=""
            />
            <div className="cover2-paraghrap-Expertise">
              <p>
                Anshuman has two decades of experience in the search and
                selection and technology industry. He started his professional
                journey with Careernet after a short stint at Infosys. A strong
                networker by nature, Anshuman set up Careernet’s executive
                search practice and has also been instrumental in making the
                company a leading talent solutions provider in the country.
                <br />
                <br />
                Anshuman is a career coach to some of the well-known business
                and technology leaders in the country and has accelerated their
                journey from campus to boardroom. Anshuman is a renowned speaker
                across industry platforms focused on how to build high impact
                teams and has featured in several media and news forums.
                Anshuman is a Bachelors of Engineering from IIT Delhi and serves
                on the board of Top Rankers and IndiQube.
              </p>
            </div>
          </div>
        </div>
      )}

      {pioneer === "pioneer2" && (
        <div className="pioneer-Container">
          <div className="cover2Expertise">
            <img
              className="coverpic2-Expertise"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_640,h_640/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff-new_M-4.png"
              alt=""
            />
            <div className="cover2-paraghrap-Expertise">
              <p>
                A pioneer in the Indian recruitment services industry, Rishi has
                many firsts under his belt. He was the first one to bring
                collaborative campus recruitment to the country and continues to
                play a pivotal role in fostering a strong industry-academia
                ecosystem. He has been instrumental in pushing for workspaces
                that are catalysts for personal growth, with integrity,
                innovation and value at the core.
                <br />
                <br />
                Rishi’s deep industry expertise in talent acquisition, vendor
                management, business strategy, business and HR consulting,
                internet recruiting and program management, have been the
                building blocks of Careernet. At present, he is the Chief
                Executive Officer of IndiQube, a renowned name in the managed
                office spaces domain.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="PioneerBtnn">
        <button className="pioneerBtn" onClick={() => setPioeer("pioneer1")}>
          {" "}
          <FaAngleLeft />{" "}
        </button>
        <button className="pioneerBtn" onClick={() => setPioeer("pioneer2")}>
          {" "}
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Pioneers;
