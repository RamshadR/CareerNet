import React, { useState, useEffect } from "react";
import "./Resources.css";
import Navbar from "../../../Common/Navbar";
import SubscribeForm from "../SubscribeForm";
import Footer from "../../../Common/Footer";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import caseData from "../../../../assets/mock/CaseStudies.json";
import blogDatas from "../../../../assets/mock/Blog.json";
import infographicDatas from "../../../../assets/mock/Infographics.json";
import ebookData from "../../../../assets/mock/Ebook.json";
import podcastData from "../../../../assets/mock/Podcast.json";
import { Container, Row, Col } from "react-bootstrap";

const Resources = () => {
  const [options, setOptions] = useState("Casestudies");
  const [caseStudies, setCaseStudies] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [infographicData, setInfographicData] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    setCaseStudies(caseData);
  }, []);
  useEffect(() => {
    setBlogData(blogDatas);
  }, []);
  useEffect(() => {
    setInfographicData(infographicDatas);
  }, []);
  useEffect(() => {
    setEbooks(ebookData);
  }, []);
  useEffect(() => {
    setPodcasts(podcastData);
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <img
          className="solution-coverpic"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2209,h_1080/https://careernet.in/wp-content/uploads/2022/04/Resources_Banner_edit.jpg"
          alt=""
        />
        <div className="solution-text">
          Making <br /> learning <br />
          happen
        </div>
      </div>
      <div className="news-blog-header">
        <div className="news-content">
          <h2 className="news-title">Resources</h2>
          <ul className="news-broadcum">
            <li className="news-Link">
              <Link to="/" className="news-Link">
                Home
              </Link>
            </li>
            <li className="news-Link">Thought Centre</li>
            <li className="news-Link">Resources</li>
          </ul>
        </div>
      </div>
      <div className="option-Container">
        <div className="optionsBtn">
          <button
            className="top-OptionesBtn"
            onClick={() => setOptions("Casestudies")}
          >
            Case Studies
          </button>
          <button
            className="top-OptionesBtn"
            onClick={() => setOptions("Blogs")}
          >
            Blogs
          </button>
          <button
            className="top-OptionesBtn"
            onClick={() => setOptions("Infographics")}
          >
            Infographics
          </button>
          <button
            className="top-OptionesBtn"
            onClick={() => setOptions("E-book")}
          >
            E-book
          </button>
          <button
            className="top-OptionesBtn"
            onClick={() => setOptions("Podcasts")}
          >
            Podcasts
          </button>
        </div>
        {options === "Casestudies" && (
          <div>
            <Container className="newcard-Container">
              <Row>
                {caseStudies.map((study) => (
                  <Col key={study.id} md={4} className="mb-4">
                    <Card style={{ width: "18rem", border: "none" }}>
                      <Card.Img variant="top" src={study.image} />
                      <Card.Body>
                        <Card.Title>{study.title}</Card.Title>
                        <Card.Text>
                          <div className="post-excerpt">
                            {study.excerpt}
                            <span className="excerpt-hellip"> […]</span>
                          </div>
                        </Card.Text>
                        <div className="viewmoreb">
                          <img
                            className="viewBtn"
                            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                            alt=""
                          />
                          <span className="ReadText">Read More</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        )}

        {options === "Blogs" && (
          <div>
            <Container className="newcard-Container">
              <Row>
                {blogData.map((blog) => (
                  <Col key={blog.id} md={4} className="mb-4">
                    <Card style={{ width: "18rem", border: "none" }}>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <div className="viewmoreb">
                          <img
                            className="viewBtn"
                            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                            alt=""
                          />
                          <span className="ReadText">Read More</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        )}

        {options === "Infographics" && (
          <div>
            <Container className="newcard-Container">
              <Row>
                {infographicData.map((card) => (
                  <Col key={card.id} md={4} className="mb-4">
                    <Card style={{ width: "18rem", border: "none" }}>
                      <Card.Img variant="top" src={card.image} />
                      <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <div className="viewmoreb">
                          <img
                            className="viewBtn"
                            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                            alt=""
                          />
                          <span className="ReadText">Read More</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        )}

        {options === "E-book" && (
          <div>
            <Container className="newcard-Container">
              <Row>
                {ebooks.map((ebook) => (
                  <Col key={ebook.id} md={4} className="mb-4">
                    <Card style={{ width: "18rem", border: "none" }}>
                      <Card.Img variant="top" src={ebook.image} />
                      <Card.Body>
                        <Card.Title>{ebook.title}</Card.Title>
                        <Card.Text>
                          <div className="post-excerpt">
                            {ebook.excerpt}
                            <span className="excerpt-hellip"> […]</span>
                          </div>
                        </Card.Text>
                        <div className="viewmoreb">
                          <img
                            className="viewBtn"
                            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                            alt=""
                          />
                          <span className="ReadText">Read More</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        )}
        {options === "Podcasts" && (
          <div>
            <Container className="newcard-Container">
              <Row>
                {podcasts.map((podcast) => (
                  <Col key={podcast.id} md={4} className="mb-4">
                    <Card style={{ width: "18rem", border: "none" }}>
                      <Card.Img variant="top" src={podcast.image} />
                      <Card.Body>
                        <Card.Title>{podcast.title}</Card.Title>
                        <Card.Text>
                          <div className="post-excerpt">
                            {podcast.excerpt}
                            <span className="excerpt-hellip"> […]</span>
                          </div>
                        </Card.Text>
                        <div className="viewmoreb">
                          <img
                            className="viewBtn"
                            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                            alt=""
                          />
                          <span className="ReadText">Read More</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        )}
      </div>
      <SubscribeForm />
      <Footer />
    </div>
  );
};

export default Resources;
