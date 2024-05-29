import "./AboutUs.scss";
import Aboutus from "../../assets/images/aboutus.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const controlsFirst = useAnimation();
  const controlsSecond = useAnimation();

  const [refFirst, inViewFirst] = useInView({ triggerOnce: true });
  const [refSecond, inViewSecond] = useInView({ triggerOnce: true });

  if (inViewFirst) {
    controlsFirst.start({ y: 0, opacity: 1 });
  }
  if (inViewSecond) {
    controlsSecond.start({ y: 0, opacity: 1 });
  }
  return (
    <div className="aboutus-container">
      <div className="mx">
        <div className="aboutus-wrapper">
          <motion.div
            className="first-container"
            ref={refFirst}
            initial={{ y: 100, opacity: 0 }}
            animate={controlsFirst}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="heading">
              <h1>Experience You Can Trust</h1>
              <div className="border"></div>
            </div>
            <p
              style={{
                color: "#ff6000",
                textTransform: "capitalize",
                fontWeight: "900",
                fontSize: "16px",
              }}
            >
              About us
            </p>
            <p>
              Experience You Can Trust Redtail Insurance Agency is a leading
              provider of commercial insurance solutions in Michigan. With
              decades of experience serving businesses of all sizes and
              industries, we have earned a reputation for excellence in the
              insurance industry.
            </p>
            <p>
              Our team of knowledgeable agents is dedicated to providing
              exceptional service and innovative insurance solutions tailored to
              meet the unique needs of our clients. We take the time to
              understand your business and develop customized coverage options
              that offer peace of mind.
            </p>
            <p>
              At Redtail Insurance Agency, we are committed to helping
              businesses thrive by providing the protection they need to
              succeed.
            </p>
          </motion.div>
          <motion.div
            className="second-container"
            ref={refSecond}
            initial={{ y: -100, opacity: 0 }}
            animate={controlsSecond}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={Aboutus} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
