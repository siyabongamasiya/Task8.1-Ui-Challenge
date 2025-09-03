import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { LogoNavBarBottom } from "./logoNavBar";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <LogoNavBarBottom/>
        <div style={{ color: "white" }}>
          <div id="footer-icons-container">
            <FaFacebook className="social-icon facebook" />
            <FaTwitter className="social-icon twitter" />
            <FaPinterest className="social-icon pinterest" />
            <FaInstagram className="social-icon instagram" />
          </div>
          <p id="copyright">@ 2021 Loopstudios.All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
