import styled from "styled-components";

import formBackground from "../../assets/images/bg-shorten-desktop.svg";
import {
  PrimaryDarkViolet,
  PrimaryCyan,
  SoftGray,
  SecundaryRed
} from "../../global/colors";

export const ShortenStyled = styled.div`
  background-color: ${SoftGray};
  width: 100%;
  margin-top: 200px;

  div.shorten-contain {
    width: 90%;
    background-image: url(${formBackground});
    background-color: ${PrimaryDarkViolet};
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    margin: auto;
    position: relative;
    top: -65px;
    padding: 40px 10px;

    p {
      color: ${SecundaryRed};
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      text-align: center;
      margin-top: 5px;
    }

    div.shorten {
      display: flex;
      align-items: center;
      justify-content: center;

      input[type="text"] {
        width: 950px;
        height: 20px;
        padding: 15px;
        border-radius: 5px;
        border: none;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
      }
    }
  }

  button {
    color: #fff;
    background-color: ${PrimaryCyan};
    padding: 15px 35px;
    border-radius: 5px;
    margin-left: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
  }

  button:hover {
    opacity: 0.8;
    transition: 500ms;
  }

  div.shorted-url {
    display: flex;
    flex-direction: column-reverse;
    div.links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      padding: 5px 10px;
      background-color: #fff;
      margin: auto;
      border-radius: 5px;
      margin-top: 0px;
      margin-bottom: 15px;
      box-sizing: none;
      a.link {
        max-width: 450px;
      }

      div.between {
        button {
          padding: 10px 15px;
          margin: auto !important;
        }
      }

      div.link {
        color: ${PrimaryDarkViolet};
        background-color: ${SoftGray};
        text-decoration: none;
      }

      a {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        color: ${PrimaryCyan};
        text-decoration: none;
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 805px) {
    div.shorten {
      flex-direction: column;
      input[type="text"] {
        width: 80% !important;
        margin-bottom: 10px;
      }
    }
    div.links {
      flex-direction: column;
      justify-content: center;
      a.link {
        margin: 10px 0;
        text-align: center;
      }
      div.between {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px 0;
        margin-left: 0px !important;
        button {
          margin: auto !important;
          width: 120px;
        }
      }
    }
  }
  @media (max-width: 410px) {
    div.shorten {
      flex-direction: column;
      input[type="text"] {
        width: 80% !important;
        margin-bottom: 10px;
      }
    }
    button {
      margin: auto !important;
    }
  }
  @media (max-width: 207px) {
    div.shorten {
      input[type="text"] {
        font-size: 10px;
      }
    }
  }
`;
