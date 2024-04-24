import "./TermsAndCondition.scss";
import { TermsAndConditionsData } from "./Data";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
const TermsAndConditions = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="terms-and-conditions-container">
        <div className="mx">
          <div className="terms-and-conditions-wrapper">
            <div className="navigation">
              <p>
                <span
                  style={{ color: "#ff6000", cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Home
                </span>{" "}
                {`>`}Terms & Conditions{" "}
              </p>
            </div>
            <h1>Terms & Conditions.</h1>

            <div className="content">
              {TermsAndConditionsData.map((f, i) => (
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

export default TermsAndConditions;
