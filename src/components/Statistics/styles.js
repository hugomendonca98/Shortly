import styled from "styled-components";

import {
  NeutralGrayishViolet,
  PrimaryDarkViolet,
  SoftGray,
  PrimaryCyan
} from "../../global/colors";

export const StatisticsStyled = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
  background-color: ${SoftGray};
  position: relative;

  div.statistics {
    width: 500px;
    margin: auto;
    h2 {
      font-size: 35px;
      text-align: center;
    }

    p {
      font-size: 16px;
      text-align: center;
      color: ${NeutralGrayishViolet};
    }
  }

  div.cards {
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    div.card {
      padding: 0px 30px;
      padding-bottom: 30px;
      width: 300px;
      background-color: #fff;
      border-radius: 5px;
      div.card-img {
        position: relative;
        top: -30px;
        background-color: ${PrimaryDarkViolet};
        width: 40px;
        height: 40px;
        padding: 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        img {
          margin-top: 5px;
          width: 30px;
          height: 30px;
        }
      }
    }
    div.card-text {
      h2 {
        font-size: 20px;
      }
      p {
        color: ${NeutralGrayishViolet};
      }
    }
    .card-1 {
      margin-top: 90px !important;
    }

    .card-2 {
      margin-top: 190px !important;
    }

    .line-card {
      margin-top: 80px;
      width: 20px;
      background-color: ${PrimaryCyan};
      padding: 5px;
      border: none;
    }
  }

  @media (max-width: 725px) {
    div.cards {
      flex-direction: column;
      margin-top: 70px;
      hr.line-card {
        margin-top: 0px;
        margin-bottom: 0px;
        width: 2px;
        height: 40px;
      }
      div.card {
        div.card-img {
          margin: auto;
        }
        div.card-text {
          text-align: center;
        }
      }
      div.card-1,
      div.card-2 {
        margin-top: 10px !important;
      }
    }
  }

  @media (max-width: 520px) {
    div.statistics {
      width: 90%;
      h2 {
        font-size: 24px;
      }
    }
  }
  @media (max-width: 387px) {
    div.cards {
      div.card {
        width: 200px;
        div.card-text {
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 287px) {
    div.cards {
      div.card {
        padding: 0 20px;
        padding-bottom: 10px;
        width: 150px;
        div.card-text {
          h2 {
            font-size: 16px;
            text-align: center;
          }
          p {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
