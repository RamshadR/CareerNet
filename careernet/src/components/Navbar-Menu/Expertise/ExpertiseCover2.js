import React from "react";
import "./ExpertiseCover2.css";

const ExpertiseCover2 = () => {
  const EXData = [
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/CareerNet-Website_Icons-08.png",
      description: "<p>Our extensive network of colleges enables recruiters to choose and hire from a wide pool of fresh talent.</p>"
    },
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_experties_Our-access-to-candidates-copy.png",
      description: "<p>Our access to candidates,<br/>across different<br/>experience levels.<p/>"
    },
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/CareerNet-Website_Icons-10.png",
      description: "<p>Our experience with the<br/>onboarding of as many as 1,000+<br/>CXOs over the years.</p>"
    },
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/CareerNet-Website_Icons-09.png",
      description: "<p>Our network of more than 5<br/> million professionals across <br/>industry verticals.</p>"
    },
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/CareerNet-Website_Icons-11-1.png",
      description: "<p>Our ability to become your one-stop destination to find motivated talent across the recruitment supply chain.</p>"
    },
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/CareerNet-Website_Icons-12.png",
      description: "<p>Our unbiased assistance to candidates so they can navigate their career opportunities better.</p>"
    },
  ];

  return (
    <div className="ExCover2">
      <div className="EXpicpara">
        <div className="EXpara">
          <p>
            Organisations rely on talent to make growth happen. The right people
            can lead companies towards success. But how do you know whether
            someone will be the right fit to your organisation’s ethos and values?
            Let us help you with that.
          </p>
          <p>
            Our vast network of candidates across experience levels allows us to
            find the best talent for you. Whether you’re looking to hire freshers,
            experienced candidates or leadership talent, we make it happen.
          </p>
          <p>
            We cut across the complete recruitment supply chain - from campus to
            the boardroom - to find the right resources to propel your
            organisation’s growth.
          </p>
          <p>Here’s how we are able to do that:</p>
        </div>
        <div>
          <img
            className="EXpic"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Experties-image.png"
            alt=""
          />
        </div>
      </div>
      <div className="ExCover2-Wrap">
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
  );
};

export default ExpertiseCover2;
