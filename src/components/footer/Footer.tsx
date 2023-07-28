import "./Footer.scss";

// icons
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import linkedin from "../../assets/icons/linkedin.png";
import instagram from "../../assets/icons/instagram.png";
import pinterest from "../../assets/icons/pinterest.png";
import youtube from "../../assets/icons/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li>
            <a href="#" className="link">
              About us
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Careers
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Accebility
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Media room
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Ad Choices
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Advertise with us
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Agent support
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Privacy
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Terms
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Home made
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Tech Blog
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Agent Blog
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Sitemap
            </a>
          </li>
        </ul>
        <h4 className="footer__heading">
          Do not sell or share my personal information
        </h4>

        <div className="footer__icons">
          <ul>
            <li>
              <a href="#" className="link">
                <img src={facebook} alt="facebook" />
              </a>
            </li>

            <li>
              <a href="#" className="link">
                <img src={twitter} alt="twitter" />
              </a>
            </li>

            <li>
              <a href="#" className="link">
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>

            <li>
              <a href="#" className="link">
                <img src={instagram} alt="instagram" />
              </a>
            </li>

            <li>
              <a href="#" className="link">
                <img src={pinterest} alt="pinterest" />
              </a>
            </li>

            <li>
              <a href="#" className="link">
                <img src={youtube} alt="youtube" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__copy">
          <small>&copy; 1995-2023</small>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
