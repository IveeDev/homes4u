import React from "react";
import "./Banner.scss";
import banner from "../../assets/img/banner.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <img src={banner} alt="banner" className="container__img" />
      </div>
    </section>
  );
};

export default Banner;
