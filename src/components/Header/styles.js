import styled from "styled-components";

import {
  NeutralVeryDarkViolet,
  NeutralGrayishViolet,
  PrimaryCyan
} from "../../global/colors";

export const HeaderStyled = styled.header`
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  img {
    width: 550px;
    margin-left: 10px;
  }

  div.header {
    display: flex;
    align-items: center;
    width: 600px;

    div.header-flex {
      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 55px;
        color: ${NeutralVeryDarkViolet};
        margin: 5px 0px;
        font-weight: 700;
        line-height: 1.1;
      }

      p {
        font-size: 16px;
        color: ${NeutralGrayishViolet};
        margin: 5px 0px;
        margin-bottom: 30px;
        width: 500px;
        font-weight: 700;
      }

      a {
        font-size: 18px;
        background-color: ${PrimaryCyan};
        color: white;
        padding: 10px 25px;
        border-radius: 20px;
        font-family: "Poppins", sans-serif;
        text-decoration: none;
      }

      a:hover {
        transition: 300ms;
        opacity: 0.7;
      }
    }
  }

  /***** @media para dispositivos variados. *****/

  @media (max-width: 1185px) {
    width: 800px;
    margin: auto;
    margin-top: 50px;
    img {
      width: 500px;
      margin-right: 20px;
    }

    div.header {
      margin-right: 20px;
      margin-left: 20px;
      div.header-flex {
        h1 {
          font-size: 35px;
        }

        p {
          width: 450px;
        }

        button {
          margin: 10px 0;
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 1050px) {
    div.header {
      div.header-flex {
        h1 {
          font-size: 35px;
        }

        p {
          width: 400px;
          margin: auto;
          margin-bottom: 30px;
        }

        button {
          margin: 10px 0;
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 985px) {
    img {
      width: 400px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding-top: 60px;
    width: 600px;
    margin: auto;
    img {
      width: 500px;
    }
    div.header {
      margin: auto;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      text-align: center;
      div.header-flex {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          text-align: center;
        }
        button {
          width: 200px;
        }
      }
    }
  }

  @media (max-width: 615px) {
    width: 400px;
    img {
      width: 400px;
    }
    div.header {
      width: 400px;
      margin-top: 20px;
      div.header-flex {
        width: 400px;
      }
    }
  }

  @media (max-width: 435px) {
    width: 300px;
    img {
      width: 300px;
    }
    div.header {
      width: 300px;
      div.header-flex {
        width: 300px;
        margin-top: 0px;
        h1 {
          font-size: 25px;
        }
        p {
          width: 300px;
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 325px) {
    width: 200px;
    img {
      width: 200px;
    }
    div.header {
      width: 200px;
      div.header-flex {
        width: 200px;
        p {
          width: 200px;
        }
      }
    }
  }

  @media (max-width: 225px) {
    width: 150px;
    img {
      width: 150px;
    }
    div.header {
      width: 150px;
      div.header-flex {
        width: 150px;
        h1 {
          font-size: 20px;
        }
        p {
          font-size: 14px;
          width: 150px;
        }
        button {
          width: 150px;
        }
      }
    }
  }
`;
