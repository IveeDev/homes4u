import React from "react";
import "./Home.scss";
import Banner from "../../components/banner/Banner";
import home1 from "../../assets/img/home-1.png";
import home2 from "../../assets/img/home-2.png";
import home3 from "../../assets/img/home-3.png";
import home4 from "../../assets/img/home-4.png";
import home5 from "../../assets/img/home-5.png";
import home6 from "../../assets/img/home-6.png";
import home7 from "../../assets/img/home-7.png";
import home8 from "../../assets/img/home-8.png";
import home9 from "../../assets/img/home-9.png";

import home10 from "../../assets/img/home-10.png";
import home11 from "../../assets/img/home-11.png";
import home12 from "../../assets/img/home-12.png";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <Banner />

      <div className="explore">
        <div className="container">
          <h1 className="container__text-primary">Check Homes4u</h1>
          <p className="container__paragraph">
            Explore our site for homes available for rent, lease, sale , talk to
            houseowners,
            <br />
            receive neighbourhood insights and virtual tours. to what is unique
            to you.
          </p>
          <div className="container__list">
            <ul>
              <li>
                <NavLink to={"/"} className="link">
                  Duplex
                </NavLink>
              </li>

              <li>
                <NavLink to={"/"} className="link">
                  Studio apartment
                </NavLink>
              </li>

              <li>
                <NavLink to={"/"} className="link">
                  Bungalow
                </NavLink>
              </li>

              <li>
                <NavLink to={"/"} className="link">
                  Terrace duplex
                </NavLink>
              </li>

              <li>
                <NavLink to={"/"} className="link">
                  Semi-detached
                </NavLink>
              </li>

              <li>
                <NavLink to={"/"} className="link">
                  Apartment
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="container__grid">
            <div className="container__row">
              <div className="img__col">
                <img src={home1} alt="home-1" />
              </div>

              <div className="img__col">
                <img src={home2} alt="home-1" />
              </div>
              <div className="img__col">
                <img src={home1} alt="home-1" />
              </div>
            </div>

            <div className="container__row">
              <div className="img__col">
                <img src={home4} alt="home-1" />
              </div>

              <div className="img__col">
                <img src={home5} alt="home-1" />
              </div>
              <div className="img__col">
                <img src={home6} alt="home-1" />
              </div>
            </div>

            <div className="container__row">
              <div className="img__col">
                <img src={home7} alt="home-7" />
              </div>

              <div className="img__col">
                <img src={home8} alt="home-8" />
              </div>
              <div className="img__col">
                <img src={home9} alt="home-9" />
              </div>
            </div>

            <div className="container__row">
              <div className="img__col">
                <img src={home10} alt="home-10" />
              </div>

              <div className="img__col">
                <img src={home11} alt="home-11" />
              </div>
              <div className="img__col">
                <img src={home12} alt="home-13" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
