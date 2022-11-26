import { Android, Apple, FacebookOutlined, Twitter } from "@mui/icons-material";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-nav">
        <nav className="footer-menu">
          <div>
            <a href="#">About Us</a>
            <a href="#">Team</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div>
            <a href="#"> Testimonials</a>
            <a href="#">Feedback</a>
          </div>
          <div>
            <a href="#">Blog</a>
            <a href="#">FAQs</a>
          </div>
          <div>
            <a href="#">Help Desk</a>
            <a href="#">Contact Us</a>
          </div>
        </nav>
        <div className="footer-logo">
          <h1>LOGO.</h1>
          <p>
            265 GRA <br />
            Port Harcourt <br /> Rivers State, 500272 <br /> NG
          </p>
        </div>
      </div>
      <div className="sm">
        <div className="sm-icons">
          <span>Follows Us</span>
          <FacebookOutlined />
          <Twitter />
        </div>
        <div className="appstore">
          <span>Download the Mobile app</span>
          <Apple />
          <Android />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
