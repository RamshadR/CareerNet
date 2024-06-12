import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../../../Common/Navbar";
import "../NewsInside/News.css";
import Footer from "../../../Common/Footer";
import Card from "react-bootstrap/Card";
import PaginationComponent from "./PaginationComponent";
import jsonData from "../../../../assets/mock/NewsData.json";
import { Container, Row, Col } from "react-bootstrap";

const News = () => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(parseInt(pageNumber) || 1);
  const postsPerPage = 9;

  useEffect(() => {
    setNewsData(jsonData);
  }, []);

  useEffect(() => {
    setCurrentPage(parseInt(pageNumber) || 1);
  }, [pageNumber]);

  const totalPosts = newsData.length;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsData.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    navigate(`/news/page/${page}`);
  };

  return (
    <div>
      <Navbar />
      <div>
        <img
          className="solution-coverpic"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1920,h_916/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_Thought-center-banner-84.jpg"
          alt=""
        />
        <div className="newsphotoText">
          Making <br />
          waves happen
        </div>
      </div>
      <div className="news-blog-header">
        <div className="news-content">
          <h2 className="news-title">News</h2>
          <ul className="news-broadcum">
            <li className="news-Link">
              <Link to="/" className="news-Link">
                Home
              </Link>
            </li>
            <li className="news-Link">Thought Centre</li>
            <li className="news-Link">News</li>
          </ul>
        </div>
      </div>
      <Container className="newcard-Container">
        <Row>
          {currentPosts.map((card) => (
            <Col key={card.id} md={4} className="mb-4">
              <Card style={{ width: "18rem", border: "none" }}>
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                  <Link to={`/news/card/${card.id}`}>
                    <Card.Title>{card.title}</Card.Title>
                  </Link>
                  <Card.Text>
                    <div className="post-excerpt">
                      {card.excerpt}
                    </div>
                  </Card.Text>
                  <Link to={`/news/card/${card.id}`}>
                    <div className="viewmoreb">
                      <img
                        className="viewBtn"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                        alt=""
                      />
                      <span className="ReadText">Read More</span>
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <PaginationComponent
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
      />
      <Footer />
    </div>
  );
};

export default News;
