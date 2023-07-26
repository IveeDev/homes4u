import React from "react";
import "./Banner.scss";
import banner from "../../assets/img/banner.png";
import SearchInput from "../searchInput/SearchInput";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <img src={banner} alt="banner" className="container__img" />
        <div className="container__searchbar">
          <SearchInput />
        </div>
      </div>
    </section>
  );
};

export default Banner;
