import React from "react";
import "./Header.scss";

import Logo from "../../assets/logos/header-logo.svg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="header-container">
      <div className="mx">
        <div className="header-wrapper">
          <img src={Logo} alt="" onClick={() => navigate("/")} />
          <Button
            children="Quotes"
            variant="primary"
            onClick={() => scrollToSection("quote")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
