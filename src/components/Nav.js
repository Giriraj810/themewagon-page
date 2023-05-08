import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css"

const Nav = () => {

  return (
    <>
      <div className="nav-bar">
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="nav-link">
              COURSES
            </NavLink>
          </li>
          <li>
            <NavLink to="/PAGES" className="nav-link">
              PAGES 
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              CONTACT
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to="/contact" className="nav-link-join">
              Join Now &rarr;
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
  };

export default Nav;
