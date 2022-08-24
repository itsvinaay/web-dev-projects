import React from "react";
import { NavLink } from "react-router-dom";

// import "../../src/App.css";
// import BackgroundImage from '../../assets/images/wallpaper.png'

export default function LandingPage() {
  return (
    <header style={HeaderStyle}>
      <h1 className="main-title text-center">
        Safer yields in<br></br> volatile market<br></br> environments
      </h1>
      {/* <p className="main-para text-center">join us now and don't waste time</p> */}
      <div className="buttons text-center mt-5">
        <NavLink to="/Skills">
          <button className="button-56">Launch</button>
        </NavLink>
        {/* <Link to="/register">
          <button className="primary-button" id="reg_btn">
            <span>register </span>
          </button>
        </Link>  */}
      </div>
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  // background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
