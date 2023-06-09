import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";

const ErrorPage = () => {
  const ErrorPage = styled.section`
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
    .error-page {
      position: relative;
      align-items: center;
      padding: 5% 28% 0 28%;
      justify-content: center;
      text-align: center;

      h1 {
        font-weight: 900;
        font-size: 8rem;
      }
      h3 {
        font-size: 4rem;
        font-weight: 700;
      }
      p {
        padding-block: 2rem;
      }
      button {
        background-color: #ee3524;
        border-radius: 35px;
        border: none;
        color: #fff;
        padding: 1.5rem 4rem;
      }
      button:hover {
        background-color: #fb6244;
      }
    }
  `;
  return (
    <ErrorPage>
      <div className="carousel-1">
        <div className="carousel-content">
          <h1>Not Found</h1>
          <h3>
            Home &nbsp; &nbsp;/ &nbsp;&nbsp; Pages &nbsp;&nbsp; / &nbsp;&nbsp;
            404
          </h3>
        </div>
      </div>
      <div className="error-page">
        <BsExclamationTriangle size={80} style={{ fill: "#ee3524" }} />
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <p>
          We’re sorry, the page you have looked for does not exist in our
          website! Maybe go to our home page or try to use a search?
        </p>
        <NavLink to={"/"}>
          <button>Go Back To Home</button>
        </NavLink>
      </div>
      <Footer/>
    </ErrorPage>
  );
};
export default ErrorPage;
