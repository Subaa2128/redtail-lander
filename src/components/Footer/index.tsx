import "./Footer.scss";
import FooterLogo from "../../assets/logos/footer-logo.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Linkedin from "../../assets/icons/linkdin.svg";
import Location from "../../assets/icons/map-pin.svg";
import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";
import Twitter from "../../assets/icons/twitter.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };
  return (
    <div className="footer-container">
      <div className="mx">
        <div className="footer-wrapper">
          <div className="first-container">
            <div className="footer-logo">
              <img src={FooterLogo} alt="" />
              <p>
                Benefit from our decades of industry experience and knowledge,
                ensuring you receive expert guidance and support at every step
                of your life insurance journey.
              </p>
              <div className="social-media">
                <img src={Instagram} alt="" />
                <img src={Facebook} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Twitter} alt="" />
              </div>
            </div>
            <div className="border"></div>
            <div className="contact-info">
              <h2>Contact info</h2>
              <div className="info">
                <div className="details">
                  <img src={Phone} alt="" />
                  <p>586-907-8700</p>
                </div>
                <div className="details">
                  <img src={Mail} alt="" />
                  <p>sam@redtail.agency</p>
                </div>
                <div className="details">
                  <img src={Location} alt="" />
                  <p>455 E Maple Rd Troy, Michigan 48083, USA.</p>
                </div>
              </div>
            </div>
            {/* <div className="border"></div>
            <div className="house-of-operation">
              <h2>House of operation</h2>
              <div className="content">
                <div className="details">
                  <h4>Spearman & Perryton Office</h4>
                  <div className="date">
                    <p>Mon-Fri</p>
                    <div className="border"></div>
                    <p>9am-5pm</p>
                  </div>
                </div>

                <div className="details">
                  <h4>Amarillo Office</h4>
                  <div className="date">
                    <p>Mon, Wed, Fri</p>
                    <div className="border"></div>
                    <p>9am-5pm</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="second-container">
            <div className="">
              <p>
                © 2024 Redtail Insurance Agency, New York, NY. All Rights
                Reserved.
              </p>
            </div>
            <div className="terms-and-uses">
              <p
                onClick={() => [
                  navigate("/terms-and-condition"),
                  scrollToTop(),
                ]}
              >
                Terms of use
              </p>
              <p onClick={() => [navigate("/privacy-policy"), scrollToTop()]}>
                Privacy & Other policies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
