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

// Icons
import agent from "../../assets/icons/agent.png";
import home from "../../assets/icons/home.png";
import searchHome from "../../assets/icons/searchHome.png";

import { NavLink } from "react-router-dom";
import Feature from "../../components/features/Feature";
import HomeBtn from "../../components/homeBtn/HomeBtn";
import SearchInput from "../../components/searchInput/SearchInput";

const Home = () => {
  return (
    <section className="home">
      <Banner />

      {/* Explore homes */}
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
                <img src={home3} alt="home-1" />
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

      {/* feature. What we offer */}
      <div className="features">
        <div className="features__container">
          <h1 className="section-header">How can Homes4u help</h1>
          <div className="features__grid">
            <Feature>
              <img src={agent} alt="agent" className="features__img" />
              <h3 className="features__h3">Buy a home</h3>
              <p className="features__paragraph">
                Find your dream house among the over 500,000+ homes for sale on
                our website.
              </p>
              <HomeBtn>Find a home</HomeBtn>
            </Feature>

            <Feature>
              <img src={home} alt="agent" className="features__img" />
              <h3 className="features__h3">Rent a home</h3>
              <p className="features__paragraph">
                We make your experience seamless, from finding your house of
                choice, to applying and paying for rent.
              </p>
              <HomeBtn>Find a rental</HomeBtn>
            </Feature>

            <Feature>
              <img src={searchHome} alt="agent" className="features__img" />
              <h3 className="features__h3 features__h3--u">
                View neighborhoods
              </h3>
              <p className="features__paragraph features__paragraph--u">
                Have a feel of your desired neighbourhood, get neighborhood
                insights by taking a tour with us.
              </p>
              {/* <button>Find a home</button> */}
              <HomeBtn>Take a tour</HomeBtn>
            </Feature>
          </div>
        </div>
      </div>

      {/* search by preference */}
      <div className="search">
        <div className="search__container">
          <h3 className="section-header search__header">
            Search by preference
          </h3>
          <SearchInput />
        </div>
      </div>
    </section>
  );
};

export default Home;
