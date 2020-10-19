import React, { useEffect, useState } from "react";
import "./Nav.css";

const logo =
  "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg";

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={`nav ${show && "showNav"}`}>
      <img className="nav_logo" src={logo} alt="Netflix Logo" />
      <img
        className="nav_avatar"
        src={require("./avatar.png")}
        alt="Netflix Avatar"
      />
    </div>
  );
};

export default Nav;
