import React from "react";
import "./Hero.scss";
import Button from "../Button";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero-container">
      <div className="mx">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>More than just a policy.</h1>

            <div className="content">
              <h4>
                Protect what matters most by choosing the perfect life insurance
              </h4>
              <h4> plan for you and your loved ones.</h4>
            </div>
            <Button
              children="Get a quote"
              variant="primary"
              onClick={() => scrollToSection("quote")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
