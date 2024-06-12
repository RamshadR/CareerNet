import React from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import "./DigitalHiring.css";
import Words from  "../Home/Words";
import RecruitmentForm from "./RecruitmentForm";

const DigitalHiring = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img
          className="joinus-Coverpic"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2209,h_1080/https://careernet.in/wp-content/uploads/2022/05/DFH_banner_edit_v02.jpg"
          alt=""
        />
        <div className="dhphotoText">
          We making <br />
          digitised hiring
          <br /> happen
        </div>
      </div>

      <div className="secondpage">
        <div className="dhparagraph">
          <p>
            Recruitment processes have undergone a massive digital
            transformation over the past few years. It has helped in increasing
            the speed, throughput, and talent outreach while creating delightful
            candidate experience consistently. Employers across industries are
            adopting and leveraging technology-based recruitment platforms and
            tools to stay relevant in the present times.
          </p>
          <p>
            Our digital first hiring solutions are stand-alone automation
            offerings which can integrate and work seamlessly with your current
            in-house tools and process thereby improving your recruitment
            outcomes.
          </p>
        </div>
        <img
          className="coverpic2"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff-solution_DH-image-15-1.png"
          alt=""
        />
      </div>
      <div className="diversity-Cover3">
        <h3 className="diversity-Cover3-Tilte">
          <span>We help with the</span>
          <i> following digital hiring solutions</i>
        </h3>

        <div className="diCover2">
          <div className="lhCover2-box">
            <img
              className="lhCover2-img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_PS-114.png"
              alt=""
            />
            <div className="lhCover2-text">
              <h4 className="lhCover2-title">PRE-ASSESSED TALENT POOL</h4>
              <div className="lhCover2-para">
                We give you ready access to a pool of pre-assessed candidates
                across industries, domains, functions and experience levels. We
                use scientific and structured assessments and adhere to industry
                standards when evaluating candidates’ skills and competencies.
                Simply put, we enable quality hiring, pronto.
              </div>
              <div className="dhviewmore">
                <img
                  className="viewBtn"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                  alt=""
                />
                <span className="dgviewText">Read More</span>
              </div>
            </div>
          </div>
          <div className="lhCover2-box">
            <img
              className="lhCover2-img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_PS-116.png"
              alt=""
            />
            <div className="lhCover2-text">
              <h4 className="lhCover2-title">REMOTE HIRING</h4>
              <div className="lhCover2-para">
                We have the right technology and platform to source, assess,
                interview, and onboard talent remotely across industries,
                functions, and experience levels. We ensure a superior candidate
                experience and engagement throughout the process.
              </div>
            </div>
          </div>
        </div>
        <div className="dhCover2">
          <div className="lhCover2-box">
            <img
              className="lhCover2-img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_PS-117.png"
              alt=""
            />
            <div className="lhCover2-text">
              <h4 className="lhCover2-title">HIRING CHALLENGES</h4>
              <div className="lhCover2-para">
                The candidates you seek are seeking you on MyCareernet - an
                end-to-end solution, comprising of a platform and allied
                services for hosting end-to-end hiring challenges for both
                campus and lateral recruitments. Hiring challenges or hackathons
                are ideal when you need to recruit the best talent at scale. We
                enable you to host these challenges and measure candidates' core
                competencies while enhancing your employer brand value.
              </div>
              <div className="dhviewmore">
                <img
                  className="viewBtn"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                  alt=""
                />
                <span className="dgviewText">Read More</span>
              </div>
            </div>
          </div>
          <div className="lhCover2-box">
            <img
              className="lhCover2-img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_PS-115.png"
              alt=""
            />
            <div className="lhCover2-text">
              <h4 className="lhCover2-title">
                EXCLUSIVE OR SHARED CAREER FAIRS
              </h4>
              <div className="lhCover2-para">
                <p>
                  Explore the horizon of possibilities with MyCareernet - an
                  end-to-end solution, comprising a platform and allied
                  services. Whether you’re a top IT organisation or a disruptive
                  startup, we help you host curated career events. Our
                  digital-first approach helps you recruit efficiently and
                  effectively, while our comprehensive phygital approach ensures
                  support for every aspect of your career event.
                </p>
                <p>
                  Access over 5 million candidates and enhance your employer
                  branding with the right communication targeting the right
                  candidates. We also help you host curated events with
                  candidates from diverse communities such as LGBTQIA, persons
                  with disabilities (PwD), veterans, and women to enable
                  inclusive workplaces like yours to discover the best talent.
                </p>
              </div>
              <div className="dhviewmore">
                <img
                  className="viewBtn"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                  alt=""
                />
                <span className="dgviewText">Read More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Words/>
      <RecruitmentForm/>
      <Footer />
    </div>
  );
};

export default DigitalHiring;
