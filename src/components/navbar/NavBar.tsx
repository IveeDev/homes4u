import { NavLink } from "react-router-dom";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <NavLink to={"/"} className="link">
            Homes4u
          </NavLink>
        </div>

        <div className="nav__bar">
          <ul>
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Rent
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Post Your Rentals
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                About us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav__btns">
          <button className="btn btn--login">Login</button>
          <button className="btn btn--signup">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
