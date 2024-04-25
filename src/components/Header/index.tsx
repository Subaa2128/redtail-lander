import React from "react";
import "./Header.scss";

import Logo from "../../assets/logos/header-logo.svg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navigateAndScroll = (elementId: string) => {
    navigate("/");

    setTimeout(() => {
      scrollToSection(elementId);
    }, 100);
  };
  return (
    <div className="header-container">
      <div className="mx">
        <div className="header-wrapper">
          <img src={Logo} alt="" onClick={() => navigate("/")} />
          <Button
            children="Quotes"
            variant="primary"
            onClick={() => [navigate("/"), navigateAndScroll("quote")]}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
