import { useEffect, useState } from "react";
import "./TellUs.scss";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Mens from "../../assets/images/men.png";
import UserIcon from "../../assets/icons/user.svg";
import Mail from "../../assets/icons/grey-mail.svg";
import Phone from "../../assets/icons/grey-phone.svg";
import Button from "../Button";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  insurance: "",
  help: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  insurance: Yup.string(),
  help: Yup.string(),
});

const TellUs = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const targetElement: any = document.getElementById("open");
      if (targetElement && scrollY > targetElement.offsetTop) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const imageAnimationX = screenWidth <= 900 ? 0 : 350;

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      setLoading(true);
      const emailParams = {
        to_email: "office@redtail.agency",
        subject: "details",
        message: `
        username:${values.firstName}${values.lastName}, 
        userMail:${values.email},
        userPhoneNumber:${values.phone},
        insurance:${values.insurance},
        help:${values.help}
   `,
        from_name: values.firstName,
        to_name: "Redtail Agency",
      };

      const response = await emailjs.send(
        "service_lu85ban",
        "template_bl0xrda",
        emailParams,
        "1BBb4Wl8wcNJ535hw"
      );
      console.log("Email sent", response);
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tell-us-container" id="open">
      <div className="mx">
        <div className="tell-us-wrapper" id="quote">
          <div className="heading">
            <h1>Tell us about yourself.</h1>
            <div className="border"></div>
          </div>
          <div className="content">
            {hover && (
              <motion.div
                className="tell-us-form"
                initial={{ y: 100 }} // Initial position of the form
                animate={{ y: 0 }} // Final position of the form (move up by 100 pixels when hovered)
                transition={{ duration: 0.5 }} // Duration of the animation
              >
                <h3>Get a Quote!</h3>
                <p>
                  Provide your information to connect with a local financial
                  professional best suited to your needs.
                </p>
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="login-form">
                        <div className="input-container">
                          <div className="input-wrapper">
                            <label htmlFor="">First name</label>
                            <div
                              className="input-field"
                              style={{
                                border:
                                  touched.firstName && errors.firstName
                                    ? "1px solid #ee3737"
                                    : "qpx solid #999",
                              }}
                            >
                              <img
                                width={20}
                                height={20}
                                src={UserIcon}
                                alt=""
                              />
                              <div className="border"></div>
                              <Field
                                type="text"
                                placeholder="First name"
                                name="firstName"
                              />
                            </div>
                            {touched.firstName && errors.firstName ? (
                              <p>{errors.firstName}</p>
                            ) : null}
                          </div>
                          <div className="input-wrapper">
                            <label htmlFor="">Last name</label>
                            <div
                              className="input-field"
                              style={{
                                border:
                                  touched.firstName && errors.firstName
                                    ? "1px solid #ee3737"
                                    : "qpx solid #999",
                              }}
                            >
                              <img
                                width={20}
                                height={20}
                                src={UserIcon}
                                alt=""
                              />
                              <div className="border"></div>
                              <Field
                                type="text"
                                placeholder="Last name"
                                name="lastName"
                              />
                            </div>
                            {touched.lastName && errors.lastName ? (
                              <p>{errors.lastName}</p>
                            ) : null}
                          </div>
                        </div>

                        <div className="input-container">
                          <div className="input-wrapper">
                            <label htmlFor="">E-mail address</label>
                            <div
                              className="input-field"
                              style={{
                                border:
                                  touched.firstName && errors.firstName
                                    ? "1px solid #ee3737"
                                    : "qpx solid #999",
                              }}
                            >
                              <img width={17} height={17} src={Mail} alt="" />
                              <div className="border"></div>
                              <Field
                                type="text"
                                placeholder="E-mail address"
                                name="email"
                              />
                            </div>
                            {touched.email && errors.email ? (
                              <p>{errors.email}</p>
                            ) : null}
                          </div>
                          <div className="input-wrapper">
                            <label htmlFor="">Phone number</label>
                            <div
                              className="input-field"
                              style={{
                                border:
                                  touched.firstName && errors.firstName
                                    ? "1px solid #ee3737"
                                    : "qpx solid #999",
                              }}
                            >
                              <img width={17} height={17} src={Phone} alt="" />
                              <div className="border"></div>
                              <Field
                                type="text"
                                placeholder="Phone Number"
                                name="phone"
                              />
                            </div>
                            {touched.phone && errors.phone ? (
                              <p>{errors.phone}</p>
                            ) : null}
                          </div>
                        </div>

                        <div
                          className="input-wrapper"
                          style={{ paddingBottom: "24px" }}
                        >
                          <label htmlFor="">Insurance coverage</label>
                          <div
                            className="input-field"
                            style={{
                              border:
                                touched.firstName && errors.firstName
                                  ? "1px solid #ee3737"
                                  : "qpx solid #999",
                            }}
                          >
                            <Field type="text" name="insurance" />
                          </div>
                          {touched.insurance && errors.insurance ? (
                            <p>{errors.insurance}</p>
                          ) : null}
                        </div>

                        <div
                          className="input-wrapper"
                          style={{ paddingBottom: "32px" }}
                        >
                          <label htmlFor="">How can we help?</label>
                          <div
                            className="input-field"
                            style={{
                              border:
                                touched.firstName && errors.firstName
                                  ? "1px solid #ee3737"
                                  : "qpx solid #999",
                              height:
                                window.innerWidth <= 850 ? "15vh" : "20vh",
                            }}
                          >
                            <Field type="text" name="help" />
                          </div>
                          {touched.help && errors.help ? (
                            <p>{errors.help}</p>
                          ) : null}
                        </div>
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={loading}
                          style={{
                            background: loading ? "#f29860" : "#ff6000",
                          }}
                        >
                          Get a quote
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </motion.div>
            )}
            <motion.div
              className="image"
              initial={{ x: 1000 }} // Initial position of the image
              animate={{ x: hover ? imageAnimationX : 2 }} // Final position of the image (move to the right by 100 pixels when hovered)
              transition={{ duration: 0.5 }} // Duration of the animation
            >
              <img
                src={Mens}
                alt=""
                style={{ height: window.innerWidth <= 850 ? "80vh" : "115vh" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TellUs;
