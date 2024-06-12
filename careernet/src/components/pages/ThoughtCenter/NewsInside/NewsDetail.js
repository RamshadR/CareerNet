import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./NewsPage.css";
import Navbar from "../../../Common/Navbar";
import Footer from "../../../Common/Footer";

const NewsDetail = () => {
  const { id } = useParams();
  const newsData = JSON.parse(localStorage.getItem('newsData'));
  const newsItem = newsData.find((item) => item.id === parseInt(id));
  useEffect(() => {
    localStorage.setItem('newsId', id);
  }, [id]);

  return (
    <div>
      <Navbar/>
      <div className="npage">
        <h1 className="npage-title">
          {newsItem.title}
        </h1>
      </div>
      <div className="npageimg">
        <img
          src={newsItem.image}
          alt={newsItem.title}
        />
      </div>
      <div className="npagepara">
        {newsItem.desc.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <a href={newsItem.link}>
          <div className="viewmoreb">
            <img
              className="viewBtn"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
              alt="Arrow"
            />
            <span className="ReadText">Read More</span>
          </div>
        </a>
      </div>
      <Footer/>
    </div>
  );
};

export default NewsDetail;
