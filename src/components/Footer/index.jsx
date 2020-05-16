/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { FooterStyled } from "./styles";
import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer">
        <img src={logo} alt="" />
        <div className="column">
          <h3>Características</h3>
          <p>
            <a href="#">Encurtamento de links</a>
          </p>
          <p>
            <a href="#">Links de marca</a>
          </p>
          <p>
            <a href="#">Análise</a>
          </p>
        </div>
        <div className="column">
          <h3>Recursos</h3>
          <p>
            <a href="#">Blog</a>
          </p>
          <p>
            <a href="#">Desenvolvedor</a>
          </p>
          <p>
            <a href="#">Suporte</a>
          </p>
        </div>
        <div className="column">
          <h3>Companhia</h3>
          <p>
            <a href="#">Sobre</a>
          </p>
          <p>
            <a href="#">Nosso time</a>
          </p>
          <p>
            <a href="#">Carreira</a>
          </p>
          <p>
            <a href="#">Contato</a>
          </p>
        </div>
        <div className="column">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
