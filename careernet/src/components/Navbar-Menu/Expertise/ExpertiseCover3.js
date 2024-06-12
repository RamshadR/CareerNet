import React from "react";
import "./ExpertiseCover3.css";


const ExpertiseCover3 = () => {
  return (
    <div className="EXCover3-Container">
      <div className="EX3parapic">
        <div>
          <img
            className="EX3pic"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Banners_Experties.png"
            alt=""
          />
        </div>
        <div className="EX3para">
          <p>
            In 1999, when we started out, recruitment happened in an entirely
            different manner. The whole process of hiring and the search for the
            right candidates were all paper-driven. Over the years, recruitment
            has gone through an evolution and we have been an integral part of
            it.
          </p>
          <p>
            We have seen how recruitment has gone from brick to click in recent
            years and that gives us the foresight to navigate the challenges
            that lie ahead. To help you find talent solutions that are in sync
            with technological innovation, we switched to AI-driven hiring
            solutions.
          </p>
          <p>
            With the help of our group company HirePro, we make innovation
            happen. We believe that the magical combination of cutting-edge
            technology and passionately committed people can help our customers
            recruit the best talent and build outperforming teams. We have the
            capability to help our clients with end-to-end processes starting
            with sourcing candidates, screening them, conducting assessments and
            virtual interviews, and onboarding them.
          </p>
          <p>
            Our internal processes are enabled by technological innovations that
            promise to deliver exceptional experiences to customers in terms of
            data, analytics, efficiency, insights and operational mechanisms.
            Our training modules equip our employees with these tools that
            facilitate enhanced learning so they can sharpen their skills.
          </p>
        </div>
      </div>
      <div className="EX3Box-Wrap">
        {EX3Data.map((EX3, index) => (
            <div className="EX3-Box"  key={index}>
              <img src={EX3.imageUrl} alt="" />
              <h4 className="EX3-boxTitle">{EX3.title}</h4>
              <span className="EX3-boxDescription">{EX3.description}</span>
            </div>
        ))}
      </div>
      <div>
      <h3 className="E3bottom-Title">Visit<span> <a  className="Bottom-Title-link" href="https://hirepro.in/">HirePro</a></span> to explore a whole new world of recruitment automation.</h3>
      </div>

    </div>
  );
};


const EX3Data = [
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_Experties-148.png",
      title: "End to end virtual\nrecruitment",
      description: "From sourcing to assessments,\ninterviews, offers and onboarding"
    },
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_Experties-149.png",
      title: "Proctored\nassessments",
      description: "Fraud-proof assessments with\nauto detection and control of cheating"
    },
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Experties_High-volume-video.png",
      title: "High volume video\ninterviews",
      description: "With automatic ID verification\nand prevention of impersonation"
    },
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_Experties-151.png",
      title: "Seamless digital\nonboarding",
      description: "Fully digitised candidate engagement\nand document collection"
    },
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_Experties-152.png",
      title: "Complete\nautomation",
      description: "Automated screening, assessments,\ninterviews, offer management, and onboarding"
    },
    {
      imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Website-Stuff_Experties-153.png",
      title: "Advisory and logistics\nservices",
      description: "Expert guidance on remote hiring\nstrategy and digital coordination"
    }
  ];
  

export default ExpertiseCover3;
