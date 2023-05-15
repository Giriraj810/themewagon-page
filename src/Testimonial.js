import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";

const Testimonial = () => {
  const Testimonial = styled.section`
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
    .testimonial-title {
      position: relative;
      color: #ee3524;
      font-size: 1.8rem;
      text-align: center;
      font-weight: 900;
      margin-top: 100px;

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
  `;
  return (
    <Testimonial>
      <div className="carousel-1">
        <div className="carousel-content">
          <h1>Courses</h1>
          <h3>
            Home &nbsp; &nbsp;/ &nbsp;&nbsp; Pages &nbsp;&nbsp; / &nbsp;&nbsp;
            Testimonial
          </h3>
        </div>
      </div>
      <div className="testimonial-title">
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
      <Footer/>
    </Testimonial>
  );
};
export default Testimonial;
