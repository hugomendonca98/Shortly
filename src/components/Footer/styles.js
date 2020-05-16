import styled from "styled-components";

import {
  NeutralVeryDarkViolet,
  NeutralGrayishViolet,
  PrimaryCyan
} from "../../Global/Styles/Colors";

export const FooterStyled = styled.div`
  background-color: ${NeutralVeryDarkViolet};
  color: #fff;

  div.footer {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    flex-wrap: wrap;

    img {
      -webkit-filter: contrast(100) invert(1);
      filter: contrast(100) invert(1);
      width: 110px;
      height: 35px;
      margin-right: 50px;
      margin-left: 20px;
    }

    div.column {
      margin: 0 30px;

      p {
        margin: 10px 0;
      }

      a {
        text-decoration: none;
        color: ${NeutralGrayishViolet};

        svg {
          color: #fff;
          margin: 0 10px;
          font-size: 30px;
        }

        svg:hover {
          color: ${PrimaryCyan};
        }
      }

      a:hover {
        color: ${PrimaryCyan};
      }
    }
  }
  @media (max-width: 790px) {
        div.footer {
            flex-direction: column;
            justify-content: center;
            img {
                margin:auto;
            }
            div.column {
                width: 200px;
                margin: auto;
                margin-top: 20px;
                text-align: center;
            }
        }
  }
`;
