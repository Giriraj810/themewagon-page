import React from "react";
import styled from "styled-components";
import {
  FaGraduationCap,
  FaBookOpen,
  FaGlobe,
  FaHome,
  FaArrowRight,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const About = () => {
  const About = styled.section`
    background-color: ${({ theme }) => theme.colors.bg};
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
    .special {
      background-color: #fff;
      display: flex;
      float: left;
      padding: 7% 8% 7% 8%;
      position: relative;
      z-index: 5;

      .container-1 {
        margin: 0 1.3rem;
        padding: 3.8rem 3rem;
        background-color: #f7d2cb;
        align-items: center;
        text-align: center;
        h4 {
          padding: 2rem 1rem;
          font-size: 1.9rem;
          font-weight: 900;
          letter-spacing: 0.1rem;
        }
        span {
          font-size: 1.6rem;
        }
      }
    }
    .about-us {
      display: flex;
      float: left;
      padding: 0 8.5%;
      .about-img {
        width: 110%;
        height: 445px;
        overflow: clip;
        object-fit: cover;
      }
      .about-content {
        position: relative;
        padding: 0 4%;
        h3 {
          color: #ee4524;
          font-size: 1.7rem;
          font-weight: bolder;
        }
        .unde {
          text-decoration: underline;
          font-weight: 900;
          font-size: 3rem;
        }
        .st {
          text-decoration: line-through;
          font-weight: 900;
          font-size: 3rem;
        }
        h2 {
          font-weight: 700;
          font-size: 4rem;
        }
        p {
          padding: 0.75rem 0;
          font-size: 1.5rem;
        }
        .ul-main {
          display: flex;
          float: left;
          width: 100%;
          .ul-1,
          .ul-2 {
            width: 100%;
            font-size: 2rem;
            p {
              font-size: 2rem;
            }
            button {
              padding: 1.5rem 4rem;
              background-color: #ee3524;
              color: #fff;
              font-size: 1.7rem;
              font-weight: 900;
              border: none;
              margin-top: 2rem;
            }
          }
        }
      }
    }
    .instructors {
      position: relative;
      top:5rem;

      .instructors-title {
        position: relative;
        color: #ee3524;
        font-size: 1.8rem;
        text-align: center;
        font-weight: 900;
        h2 {
          padding: 1rem 0;
        }
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
      }
      .instructors-container-main {
        position: relative;
        padding: 0 7.8%;
        display: flex;
        float: left;
        .container-2 {
          margin: 0 1.3rem;
          background-color: #f7d2cb;
          position: relative;
          z-index: 1;
          width: 25%;
          text-align: center;
          padding: 0 0 1rem 0;
          letter-spacing: 1px;
          overflow: hidden !important;
          h3 {
            position: relative;
            font-size: 2rem;
            font-weight: 900;
          }
          p {
            position: relative;
            font-size: 1.2rem;
            font-weight: 600;
          }

          img {
            z-index: 0;
            height: 72%;
            width: 100%;
            object-fit: cover;
            transition: transform 0.3s ease-out;
            overflow-clip-margin: content-box;
            overflow: clip;
            &:hover {
              transform: scale(1.1);
            }
          }
          .social-media {
            background-color: #f7d2cb;
            position: relative;
            width: 50%;
            padding: 0.4rem 0;
            margin: 0 25%;
            top: -30px;

            * {
              margin: 0.5rem;
            }
          }
        }
      }
    }
  `;
  return (
    <About>
      <div className="carousel-1">
        <div className="carousel-content">
          <h1>About Us</h1>
          <h3>
            Home &nbsp; &nbsp;/ &nbsp;&nbsp; Pages &nbsp;&nbsp; / &nbsp;&nbsp;
            About
          </h3>
        </div>
      </div>
      <div className="special">
        <div className="container-1">
          <FaGraduationCap size={50} style={{ fill: "#EE4524" }} />
          <h4>Skilled Instructors</h4>
          <span>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
            diam
          </span>
        </div>
        <div className="container-1">
          <FaGlobe size={50} style={{ fill: "#EE4524" }} />
          <h4>Online Classes</h4>
          <span>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
            diam
          </span>
        </div>
        <div className="container-1">
          <FaHome size={50} style={{ fill: "#EE4524" }} />
          <h4>Home Projects</h4>
          <span>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
            diam
          </span>
        </div>
        <div className="container-1">
          <FaBookOpen size={50} style={{ fill: "#EE4524" }} />
          <h4>Book Library</h4>
          <span>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
            diam
          </span>
        </div>
      </div>
      <div className="about-us">
        <img src="../images/about.jpg" alt="about us" className="about-img" />
        <div className="about-content">
          <h3>
            ABOUT US &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="unde">
              <span className="st">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              &nbsp;&nbsp;
            </span>
          </h3>
          <h2>Welcome to eLEARNING</h2>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="ul-main">
            <div className="ul-1">
              <p>
                <FaArrowRight size={15} style={{ fill: "#ee4524" }} />
                Skilled Instructors
              </p>

              <p>
                <FaArrowRight size={15} style={{ fill: "#ee4524" }} />
                International Certificate
              </p>

              <p>
                <FaArrowRight size={15} style={{ fill: "#ee4524" }} />
                Online Classes
              </p>
              <button>Read More</button>
            </div>
            <div className="ul-2">
              <p>
                <FaArrowRight size={15} style={{ fill: "#ee4524" }} />
                Online Classes
              </p>

              <p>
                <FaArrowRight size={15} style={{ fill: "#ee4524" }} />
                Skilled Instructors
              </p>

              <p>
                <FaArrowRight size={15} style={{ fill: "#ee4524" }} />
                International Certificate
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="instructors">
        <div className="instructors-title">
          <span className="unde">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="st">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp; INSTRUCTORS &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="unde">
            <span className="st">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <h2>Expert Instructors</h2>
          <div className="instructors-container-main">
            <div className="container-2">
              <img src="../images/team-1.jpg" alt="team-1" />
              <div className="social-media">
                <FaFacebookF
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
                <FaTwitter
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
                <FaInstagram
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
              </div>
              <h3>Instructor Name</h3>
              <p>Designation</p>
            </div>
            <div className="container-2">
              <img src="../images/team-2.jpg" alt="team-1" />
              <div className="social-media">
                <FaFacebookF
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
                <FaTwitter
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
                <FaInstagram
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
              </div>
              <h3>Instructor Name</h3>
              <p>Designation</p>
            </div>
            <div className="container-2">
              <img src="../images/team-3.jpg" alt="team-1" />
              <div className="social-media">
                <FaFacebookF
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
                <FaTwitter
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
                <FaInstagram
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
              </div>
              <h3>Instructor Name</h3>
              <p>Designation</p>
            </div>
            <div className="container-2">
              <img src="../images/team-4.jpg" alt="team-1" />
              <div className="social-media">
                <FaFacebookF
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
                <FaTwitter
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
                <FaInstagram
                  size={30}
                  style={{ fill: "#fff", background: "#ee3524", padding: "7" }}
                />
              </div>
              <h3>Instructor Name</h3>
              <p>Designation</p>
            </div>
          </div>
        </div>
      </div>
    </About>
  );
};

export default About;
