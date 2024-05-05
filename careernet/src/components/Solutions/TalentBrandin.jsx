import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./TalentBrandin.css";
import Words from  "../Words";
import RecruitmentForm from "./RecruitmentForm";

const TalentBrandin = () => {
  return (
    <div>
      <Navbar />
      <div className="about-Cover1">
        <img
          className="coverpic-About"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2209,h_1080/https://careernet.in/wp-content/uploads/2022/05/TB_banner_edit_v02.jpg"
          alt=""
        />
        <div className="photoTexta">
          Making
          <br />
          talent branding
          <br />
          happen
        </div>
      </div>

      <div className="cover2Expertise">
        <img
          className="coverpic2-Expertise"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Solution_DH-image.png"
          alt=""
        />
        <div className="cover2-paraghrap-Expertise">
          <p>
            Whether you’re a multinational organisation setting up a Global
            Inhouse Centre (GIC) in India or an indigenous business expanding to
            new locations, attracting quality talent can be arduous. In today’s
            dynamic recruitment scenario, a company’s brand perception as an
            employer of choice is key to attracting the right talent. This is
            where our talent branding solutions come into the picture.
          </p>
          <p>
            Meet <a href="https://mycareernet.in/mycareernet">MyCareernet</a> -
            an end-to-end solution, comprising a platform and allied services
            where we help employers discover the right talent, and build their
            employer brand among candidates. Attract and engage with your ideal
            talent community while we curate the talent pool to align with your
            long-term goals and objectives.
          </p>
          <p>
            MyCareernet makes talent discovery and dream teams happen through
            the following services:
          </p>
        </div>
      </div>

      <div className="talent-Cover2">
        <h3 className="diversity-Cover3-Tilte">
          <i>Community building</i>
        </h3>
        <div className="talent-Cover2-text">
          <div className="talent-Cover2-text1">
            We have built enduring relationships with 5 million candidates
            across verticals, experience levels, and cities in India since 1999.
            We have also nurtured an active community of 10,000+ candidates from
            the LGBTQ+, Persons with disabilities (PwD), and Veteran
            communities.
          </div>
          <div className="talent-Cover2-text2">
            Our deep experience in talent acquisition makes us well-versed in
            the growth trajectories of candidates. With this candidate
            intelligence, we help employers build talent communities including
            diversity groups, and engage with them to create a desirable brand
            image.
          </div>
        </div>
      </div>

      <div className="diversity-Cover3">
        <h3 className="diversity-Cover3-Tilte">
          <i>Events</i>
        </h3>

        <div className="tbCover2">
          <div className="lhCover2-box">
            <img
              className="lhCover2-img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/TB-3.png"
              alt=""
            />
            <div className="lhCover2-text">
              <h4 className="lhCover2-title">
                EXCLUSIVE OR SHARED CAREER FAIRS
              </h4>
              <div className="lhCover2-para">
                Explore the horizon of possibilities with
                <a href="https://mycareernet.in/mycareernet/events">
                  MyCareernet
                </a>
                - the ultimate destination for career aspirants. Whether you’re
                a top IT organisation or a disruptive startup, we help you host
                curated career events. Our digital-first approach helps you
                recruit efficiently and effectively, while our comprehensive
                phygital approach ensures support for every aspect of your
                career event. <br />
                Access over 5 million candidates and enhance your employer
                branding with the right communication targeting the right
                candidates.
              </div>
            </div>
          </div>
          <div className="lhCover2-box">
            <img
              className="lhCover2-img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_TB_EXCLUSIVE-OR-SHARED.png"
              alt=""
            />
            <div className="lhCover2-text">
              <h4 className="lhCover2-title">
                EVENTS FOR SPECIAL INTEREST GROUPS
              </h4>
              <div className="lhCover2-para">
                We help organisations reach out to diverse candidate communities
                for their inclusive talent requirements. Our pre-assessed data
                pool gives employers access to high-quality diverse talent
                across India from among fresh graduates, experienced
                professionals across different domains, women (including
                back-to-work programmes), and other underrepresented
                communities. We’ve built an active community of 10,000+
                candidates from the LGBTQ+, Persons with disabilities (PwD), and
                Veterans. We help employers build inclusive workplaces with
                diverse talent through <br />
                <a href="https://careernet.in/diversity-and-inclusion/">
                  Careernet Prism
                </a>
                .
              </div>
            </div>
          </div>
        </div>
        <div className="diCover2">
          <div className="lhCover2-box">
            <img
              className="lhCover2-img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_TB_-LEADERSHIP-CONNECTS.png"
              alt=""
            />
            <div className="lhCover2-text">
              <h4 className="lhCover2-title">LEADERSHIP CONNECTS</h4>
              <div className="lhCover2-para">
                We organise events that give CXOs the opportunity to interact
                with candidates in a closed group environment. This helps
                showcase organisations as value-driven companies to the
                candidate communities. It drives engagement between leaders and
                candidates through meaningful content, and helps them impress
                the brand’s value proposition on candidates.
              </div>
            </div>
          </div>
          <div className="lhCover2-box">
            <img
              className="lhCover2-img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/TB-6.png"
              alt=""
            />
            <div className="lhCover2-text">
              <h4 className="lhCover2-title">VIRTUAL EVENTS</h4>
              <div className="lhCover2-para">
                We manage exclusive virtual speaker sessions to highlight an
                organisation’s thought leadership in a specific domain. These
                events are great for sharing topical knowledge, establishing a
                positive brand perception among candidates, networking with
                them, and showcasing the employer's contributions to the sector.
              </div>
            </div>
          </div>
        </div>

        <div className="tbrCover2">
          <div className="tbrCover2-box">
            <img
              className="lhCover2-img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_TB_-EVENTS-FOR-SPECIAL.png"
              alt=""
            />
            <div className="tbCover2-text">
              <h4 className="tbCover2-title">EXCLUSIVE NETWORKING EVENTS</h4>
              <div className="tbCover2-para">
                We help organise and execute networking events with different
                candidate communities that match your talent acquisition
                requirements. This is a great platform for organisations to
                engage with potential hires, create a talent pipeline, and most
                importantly, position their employer brand.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="diversity-Cover3">
        <h3 className="diversity-Cover3-Tilte">
          <i>Hackathons</i> <span>and</span> <i>challenges </i>
        </h3>
        <div className="tbnCover2">
          <div className="lhCover2-box">
            <img
              className="lhCover2-img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/TB-1.png"
              alt=""
            />
            <div className="lhCover2-text">
              <h4 className="lhCover2-title">HIRING CHALLENGES</h4>
              <div className="lhCover2-para">
                The MyCareernet platform provides employers with end-to-end
                support for hiring challenges. These are effective tools to gain
                visibility among a vast pool of active candidates and attract
                the right talent. Hiring challenges or hackathons are effective
                when you need a fast and efficient solution to hire the best
                talent at scale.
              </div>
            </div>
          </div>
          <div className="lhCover2-box">
            <img
              className="lhCover2-img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/TB-2.png"
              alt=""
            />
            <div className="lhCover2-text">
              <h4 className="lhCover2-title">PRIZE CHALLENGES</h4>
              <div className="lhCover2-para">
                Hosting prize challenges, or hackathons with rewards and
                recognition, is a great way to build your employer brand, engage
                with prospective employees and establish brand recall. Besides
                staying connected with active as well as passive candidates and
                building their perception about your brand, prize challenges
                generate a talent pipeline for your organisation.
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

export default TalentBrandin;
