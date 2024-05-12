import "./PrivacyPolicy.scss";
import { PrivacyPolicyData } from "./Data";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="privacy-policy-container">
        <div className="mx">
          <div className="privacy-policy-wrapper">
            <div className="navigation">
              <p style={{ padding: "0" }}>
                <span
                  style={{ color: "#ff6000", cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Home
                </span>{" "}
                {`>`}Privacy policy
              </p>
            </div>
            <h1>Privacy policy.</h1>
            <p>
              At Redtail Insurance Agency, we are committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy outlines how we collect, use, and safeguard
              your data when you visit our website or interact with our
              services.
            </p>
            <div className="content">
              {PrivacyPolicyData.map((f, i) => (
                <div key={i} className="card">
                  <h3>{f.heading}</h3>
                  <p>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
