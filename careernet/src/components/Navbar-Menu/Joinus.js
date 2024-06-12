import React from "react";
import "../Navbar-Menu/Joinus.css";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import ImgSlide from "./ImgSlide";
import { Link } from "react-router-dom";
import JoinEmployeeBenefit from "./JoinEmployeeBenefit";

export const Joinus = () => {
  const EXData = [
    {
      imageUrl:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/06/1-%E2%80%93-2.png",
      description:
        "<p>We have serviced <b>1000+</b><br>enterprise customers, of which<br>50 are Fortune 500 companies</p>",
    },
    {
      imageUrl:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/06/1-%E2%80%93-1.png",
      description:
        "<p>Over <b>2000</b> institutions<br> across India have <br>engaged with us<br></p>",
    },
    {
      imageUrl:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/06/1-1.png",
      description:
        "<p> We have a talent network of <br><b>5M+</b> candidates across domains,<br>expertise and experience levels</p>",
    },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <img
          className="joinus-Coverpic"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2209,h_1030/https://careernet.in/wp-content/uploads/2022/06/Careernet-Careers-Page-Banner.png"
          alt=""
        />
        <div className="cover2Expertise">
          <img
            className="coverpic2-Expertise"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/06/Banner-1-%E2%80%93-2.png"
            alt=""
          />
          <div className="cover2-paraghrap-Expertise">
            <p>
              As India’s top talent solutions provider, Careernet’s clients
              range from startups to large enterprises. Our winning mantra is —
              “Team work makes the dream work”.
            </p>
            <p>
              We strongly believe that a diverse workforce is essential to
              dynamic growth and innovation — and that’s why we have people from
              all over India working with us.
            </p>
            <h5 className="form-heading">
              <span>
                <i>
                  Are you passionate, driven and want to make your mark in the
                  recruitment space?
                </i>
              </span>
            </h5>
            <Link to="/joinusform">
              <button className="joinbtn">Join us</button>
            </Link>
          </div>
        </div>
        <div className="Joincover3-container">
          <h3 className="Joincover3-Title">
            <span> Why should you</span> <i>join us?</i>
          </h3>
          <div className="joinCover2-Wrap">
            {EXData.map((ex, index) => (
              <div className="ExCover2-Box" key={index}>
                <img src={ex.imageUrl} alt="" />
                <span
                  className="EXCover2-Description"
                  dangerouslySetInnerHTML={{ __html: ex.description }}
                ></span>
              </div>
            ))}
          </div>
        </div>
        <div className="column_attr clearfix">
          <h3 className="Joinpara1-title">
            <span> Employees </span> <i>first</i>
          </h3>
          <div>
            <p className="joinpara3">
              Careernet’s successful run of over two decades is based on an
              ethos that embraces trust, empathy, and approachability.
              Everyone’s voice matters.
            </p>
            <p className="joinpara3">
              To us, winning in the workplace comes before winning in the
              marketplace. That’s why every employee is encouraged to realise
              their full potential, to think out of the box, take calculated
              risks and grow beyond their dreams.
            </p>
            <p className="joinpara3">
              We provide equal opportunities for career-building — because when
              our employees grow, so does the organisation. To facilitate this,
              our internal processes and policies aim to empower our employees
              and consistently reward their performance.
            </p>
            <h3 className="Joinpara1-title">
              <span> Going the extra mile </span>{" "}
              <i>— with trust, integrity and tenacity</i>
            </h3>
            <p className="joinpara3">
              <b>
                <i>
                  Our vision — to evolve constantly by incorporating technology
                  and human intellectual capital to offer innovative recruitment
                  solutions.
                </i>
              </b>
            </p>
            <p className="joinpara3">
              We may seem to wear our successes lightly, but make no mistake,
              we’re tenacious too. That’s how we have grown and diversified as
              leaders in our field. Even as we celebrate our success stories as
              well as share our failures, our focus continues to remain on
              building our relationship with our clients. We strive to
              consistently exceed their expectations.
            </p>
            <h3 class="Joinpara1-title">
              <span>Life at </span> <i>Careernet </i>
            </h3>
            <p className="joinpara3">
              On our campus, every day is a seamless blend of productivity,
              inspired moments, fun times, and laughter. Our young, enthusiastic
              workforce enjoys a host of career-building opportunities such as
              varied learning experiences, stints with diverse customers and
              exposure to a broad spectrum of recruitment processes.
            </p>
          </div>
          <ImgSlide/>
        </div>
        <div className="join-box-cover3">
          <p className="join-para-cover3">
            The nature of work today is driven by the forces of rapid
            technological change, varying work roles and a wide open talent
            market. Employees are under constant pressure to upgrade their
            skills and keep pace with this shifting environment. From the
            organisation’s perspective, it is crucial that employees’ goals and
            thought processes are aligned with the company’s vision and mission.
            Learning and development (L&amp;D) is the way by which employees can
            cope with these challenges.
          </p>
          <img
            className="join-img-cover3"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/06/Banner-2-1.png"
            alt=""
          />
        </div>

        <div className="join-box-cover4">
          <h3 className="join-title-cover4">
            <span> Our L&amp;D function plays a </span>{" "}
            <i>significant role in the organisation by:</i>
          </h3>
          <div className="join-cover4-container">
            <div className="join-cover4">
              <img
                className="join-img-cover4"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/06/1-2.png"
                alt=""
              />
              <div className="join-para-cover4">
                <p>
                  Deliver structured L&amp;D <br />
                  programmes to ensure that
                  <br />
                  employees have a
                  <br />
                  consistent experience and
                  <br />
                  background knowledge
                </p>
              </div>
            </div>
            <div className="join-cover4">
              <img
                className="join-img-cover4"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/06/1-2-%E2%80%93-1.png"
                alt=""
              />
              <div className="join-para-cover4">
                <p>
                  Identify employees’
                  <br />
                  needs and foster a<br />
                  learning culture
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="join-box-cover4">
            <h3 className="join-title-cover4">
              <span> Careernet has a dedicated </span>{" "}
              <i>L&amp;D team in place that aims to:</i>
            </h3>
            <div className="join-cover4-container">
              <div className="join-cover4">
                <img
                  className="join-img-cover4"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/06/1-3.png"
                  alt=""
                />
                <div className="join-para-cover4">
                  <p>
                    Upskilling through various
                    <br />
                    learning initiatives/
                    <br />
                    interventions
                  </p>
                </div>
              </div>
              <div className="join-cover4">
                <img
                  className="join-img-cover4"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/06/1-3-%E2%80%93-1.png"
                  alt=""
                />
                <div className="join-para-cover4">
                  <p>
                    Enabling employees to <br />
                    understand their
                    <br />
                    responsibilities
                  </p>
                </div>
              </div>
            </div>
            <div className="join-cover4-container">
              <div className="join-cover4">
                <img
                  className="join-img-cover4"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/06/1-3-%E2%80%93-2.png"
                  alt=""
                />
                <div className="join-para-cover4">
                  <p>
                    Sensitising employees to
                    <br />
                    our vision, mission,
                    <br />
                    policies and culture
                  </p>
                </div>
              </div>
              <div className="join-cover4">
                <img
                  className="join-img-cover4"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/06/1-3-%E2%80%93-3.png"
                  alt=""
                />
                <div className="join-para-cover4">
                  <p>
                    Building employee <br />
                    confidence through <br />
                    consistent efforts <br />
                  </p>
                </div>
                <div className="slide-img-Container"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <h3 class="join-cover5-Text"><span> We offer multiple ongoing L&amp;D programmes and initiatives, many of which<br/>are </span> <i>designed especially for new employees:</i></h3>
        <div className="join-cover5">
        <div className="consult">
          <div className="consult-option">
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">e-Induction programme</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Intensive Sourcing Programme for recruiters</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Training programme for lateral employees across functional domains,<br/>recruitment tools and data management tools</p>
            </div>
          </div>
        </div>

        <div className="access">
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Initial Learning Programme for freshers/campus hires</p>
          </div>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Outbound programmes</p>
          </div>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Organisational level compliance initiatives</p>
          </div>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">PoSH Awareness Initiative</p>
          </div>
          </div>
        </div>
        </div>
        <JoinEmployeeBenefit/>
        <Footer />
      </div>
    </div>
  );
};
