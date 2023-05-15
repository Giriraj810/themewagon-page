import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaStar, FaUser, FaClock, FaUserTie } from "react-icons/fa";
import Footer from "./components/Footer";
import Carousel from "react-bootstrap/Carousel";

const Courses = () => {
  const Courses = styled.section`
    .carousel-1 {
      width: 100%;
      height: 320px;
      position: relative;
      z-index: 2;
      background: linear-gradient(rgba(24, 29, 56, 0.7), rgba(24, 29, 56, 0.7)),
        url(../images/carousel-1.jpg);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      .carousel-content {
        width: 30%;
        top: 26%;
        left: 35%;
        position: relative;
        color: #fff;
        h1 {
          color: #fff;
          font-weight: 800;
          font-size: 6.5rem;
          text-align: center;
        }
        h3 {
          color: #fff;
          font-weight: 500;
          font-size: 1.5rem;
          text-align: center;
        }
      }
    }
    .course-title {
position:relative;
    color: #ee3524;
      font-size: 1.5rem;
      text-align: center;
      font-weight: 900;
      margin-top: 100px;
      .unde {
        text-decoration: underline;
        font-weight: 900;
        font-size: 2rem;
      }
      .st {
        text-decoration: line-through;
        font-weight: 900;
        font-size: 2rem;
      }
      h2 {
        font-weight: 900;
        font-size: 4rem;
      }
    }
    .categories {
      padding: 2% 8% 0 8%;
      display: flex;
      float: left;

      .three-box {
        width: 59%;
        .upper {
          position: relative;
          margin: 0.5rem 0.5rem 0;
          overflow: hidden !important;
          img {
            height: 23.5rem;
            width: 100%;\
            object-fit: cover;
            overflow-clip-margin: content-box;
            transition: transform 0.3s ease-out;
          }
          img:hover {
            transform: scale(1.2);
          }
          .box {
            position: absolute;
            background-color: #fff;
            padding: 1rem;
            z-index: 77;
            bottom: 0rem;
            right: 0rem;
            p {
              color: #ee3524;
            }
          }
        }
        .lower-main {
          display: flex;
          float: left;
          .lower {
            display: flex;
            margin: 0.5rem 0.5rem 0;
            position: relative;
            overflow: hidden !important;
            float: left;
            img {
              height: 23.5rem;
              overflow-clip-margin: content-box;
              transition: transform 0.3s ease-out;
              overflow: clip;
              object-fit: contain;
              width: 100%;
            }
            img:hover {
              transform: scale(1.2);
            }
            .box {
              position: absolute;
              background-color: #fff;
              padding: 1rem;
              z-index: 77;
              bottom: 0rem;
              right: 0rem;
              p {
                color: #ee3524;
              }
            }
          }
        }
      }
      .one-box {
        margin: 1rem;
        position: relative;
        width: 41%;
        overflow: hidden !important;
        img {
          height: 48rem;
          width: 100%;
          overflow-clip-margin: content-box;
          transition: transform 0.3s ease-out;
        }
        img:hover {
          transform: scale(1.2);
        }
        .box {
          position: absolute;
          background-color: #fff;
          padding: 1rem;
          z-index: 77;
          bottom: 0rem;
          right: 0rem;
          p {
            color: #ee3524;
          }
        }
      }
    }
    .courses{
      display:flex;
      padding: 7% 8%;
      float:left;
      
      .contain-1{
        margin:1.25rem;
        position:relative;
        background-color:#f7d2cb;
        text-align:center;
        

        h3{
          font-size:3em;
          padding-top:1.5rem;
          font-weight:900;
        }
        h4{
          font-size:2rem;
          padding:1.5rem 4rem;
        }
        span{
          border-top:1px solid black;
          padding:0.6rem 1.15rem;
        }
        .about{
          display: flex;
          position:absolute;
          top:42%;
          left:23%;
          justify-content: center;
          button:hover{
            background-color:#f56d60;

          }
          button{
            background-color:#ee3524;
            color:#fff;
            padding:0.5rem 1.5rem;
            font-size:1.4rem;
            border:none;
          }
          .read-more{
            border-start-start-radius:25px;
            border-end-start-radius:25px;
            border-right:1px solid  #fff;
          } 
          .join-now{
            border-start-end-radius:25px;
            border-end-end-radius:25px;             
          }         
        }
        img{
          height:23.5rem;
          object-fit:cover;
        }
        

      }
    }
    .slider-main{
      height:40rem;
      display:flex;
      .card-1,.card-2,.card-3,.card-4{
        width:25%;
        height:38rem;
        border:1px solid black;
      }
    }
  `;
  return (
    <Courses>
      <div className="carousel-1">
        <div className="carousel-content">
          <h1>Courses</h1>
          <h3>
            Home &nbsp; &nbsp;/ &nbsp;&nbsp; Pages &nbsp;&nbsp; / &nbsp;&nbsp;
            Courses
          </h3>
        </div>
      </div>
      <div className="course-title">
        <span className="unde">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="st">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp; CATEGORIES &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="unde">
          <span className="st">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <h2>Courses Categories</h2>
      </div>
      <div className="categories">
        <div className="three-box">
          <div className="upper">
            <img src="../images/cat-1.jpg" alt="cat" />
            <NavLink to="/">
              <div className="box">
                <h3>Web Design</h3>
                <p>39 Videos</p>
              </div>
            </NavLink>
          </div>
          <div className="lower-main">
            <div className="lower">
              <img src="../images/cat-2.jpg" alt="cat" />
              <NavLink to="/">
                <div className="box">
                  <h3>Web Design</h3>
                  <p>39 Videos</p>
                </div>
              </NavLink>
            </div>
            <div className="lower">
              <img src="../images/cat-3.jpg" alt="cat" />
              <NavLink to="/">
                <div className="box">
                  <h3>Web Design</h3>
                  <p>39 Videos</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="one-box">
          <img src="../images/cat-4.jpg" alt="cat" />
          <NavLink to="/">
            <div className="box">
              <h3>Web Design</h3>
              <p>39 Videos</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="course-title">
        <span className="unde">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="st">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp; COURSES &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="unde">
          <span className="st">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <h2>Popular Courses</h2>
      </div>
      <div className="courses">
        <div className="contain-1">
          <img src="../images/course-1.jpg" alt="course" />
          <div className="about">
            <NavLink to="/">
              <button className="read-more">Read More</button>
            </NavLink>
            <NavLink>
              <button className="join-now">Join Now</button>
            </NavLink>
          </div>
          <h3>$149.00</h3>
          <p>
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            (123)
          </p>
          <h4>Web Design & Development Course for Beginners</h4>
          <p>
            <span>
              <FaUserTie size={15} style={{ fill: "#ee3524" }} /> John Doe
            </span>
            <span>
              <FaClock size={15} style={{ fill: "#ee3524" }} /> 1.49 Hrs
            </span>

            <span>
              <FaUser size={15} style={{ fill: "#ee3524" }} />
              30 Students
            </span>
          </p>
        </div>
        <div className="contain-1">
          <img src="../images/course-1.jpg" alt="course" />
          <div className="about">
            <NavLink to="/">
              <button className="read-more">Read More</button>
            </NavLink>
            <NavLink>
              <button className="join-now">Join Now</button>
            </NavLink>
          </div>
          <h3>$149.00</h3>
          <p>
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            (123)
          </p>
          <h4>Web Design & Development Course for Beginners</h4>
          <p>
            <span>
              <FaUserTie size={15} style={{ fill: "#ee3524" }} /> John Doe
            </span>
            <span>
              <FaClock size={15} style={{ fill: "#ee3524" }} /> 1.49 Hrs
            </span>

            <span>
              <FaUser size={15} style={{ fill: "#ee3524" }} />
              30 Students
            </span>
          </p>
        </div>
        <div className="contain-1">
          <img src="../images/course-1.jpg" alt="course" />
          <div className="about">
            <NavLink to="/">
              <button className="read-more">Read More</button>
            </NavLink>
            <NavLink>
              <button className="join-now">Join Now</button>
            </NavLink>
          </div>
          <h3>$149.00</h3>
          <p>
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            <FaStar
              size={15}
              style={{ marginInline: "3px", fill: "#ee3524" }}
            />
            (123)
          </p>
          <h4>Web Design & Development Course for Beginners</h4>
          <p>
            <span>
              <FaUserTie size={15} style={{ fill: "#ee3524" }} /> John Doe
            </span>
            <span>
              <FaClock size={15} style={{ fill: "#ee3524" }} /> 1.49 Hrs
            </span>

            <span>
              <FaUser size={15} style={{ fill: "#ee3524" }} />
              30 Students
            </span>
          </p>
        </div>
      </div>
      <div className="course-title">
        <span className="unde">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="st">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp; TESTIMONIAL &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="unde">
          <span className="st">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <h2>Our Students Say!</h2>
      </div>
      <div className="slider-main">
        <div className="card-1"></div>
        <div className="card-2"></div>
        <div className="card-3"></div>
        <div className="card-4"></div>
      </div>
      <Carousel fade>
        <Carousel.Item>
          <img
            src="../images/team-1.jpg"
            alt="team"
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../images/team-1.jpg"
            alt="team"
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../images/team-1.jpg"
            alt="team"
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </Courses>
  );
};

export default Courses;
