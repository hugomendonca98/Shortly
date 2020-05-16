import styled from "styled-components";

import {
  NeutralGrayishViolet,
  PrimaryCyan,
  NeutralVeryDarkBlue,
  PrimaryDarkViolet
} from "../../Global/Styles/Colors";

export const MenuStyled = styled.div`
  
  .toggle {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li.logo {
      list-style: none;
    }

    i {
      font-size: 40px;
      color: ${NeutralGrayishViolet};
      cursor: pointer;
      border: none;
      text-decoration: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }
  }

  .links {
    display: none;
    flex-direction: column;
  }

  .links.open > .navegation {
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .links.open {
    display: flex;
  }

  div.navegation {
    width: 90%;
    margin: auto;
    padding-top: 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;

    ul.menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;

      div.menu-items {
        display: flex;
        align-items: center;

        li.logo {
          margin-right: 20px;
        }

        li {
          a {
            text-decoration: none;
            color: ${NeutralGrayishViolet};
          }
          a:hover {
            transition: 300ms;
            color: ${NeutralVeryDarkBlue};
          }
          margin: 5px 10px;
        }
      }

      div.menu-spotlight {
        display: flex;

        li.signup {
          margin-left: 10px;

          a {
            background-color: ${PrimaryCyan};
            padding: 10px 20px;
            color: white;
            border-radius: 20px;
          }
          a:hover {
            transition: 300ms;
            opacity: 0.7;
            color: white;
          }
        }

        li {
          a {
            text-decoration: none;
            color: ${NeutralGrayishViolet};
          }
          a:hover {
            transition: 300ms;
            color: ${NeutralVeryDarkBlue};
          }
          margin: 5px;
        }
      }
    }
  }

  .slide-bottom {
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .slide-top {
    -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }

  @media (min-width: 900px) {
    div.toggle {
      display: none;
    }

    div.links {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }

  @media (max-width: 900px) {
    .open {
      margin-bottom: 0px;
      div.navegation {
        background-color: ${PrimaryDarkViolet};
        padding: 30px 0;
        border-radius: 5px;
        ul.menu {
          flex-direction: column;
          div.menu-items {
            flex-direction: column;
            li.logo {
              display: none;
            }
            li {
              margin-top: 20px;
              a {
                color: white;
              }
            }
          }
          div.menu-spotlight {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid ${NeutralGrayishViolet};
            width: 90%;
            flex-direction: column;
            align-items: center;

            li {
              margin: 15px 0;
              a {
                color: white;
                width: 100%;
              }
            }

            li.signup {
              a {
                padding: 10px 150px;
              }

              @media (max-width: 504px) {
                a {
                  padding: 10px 100px;
                }
              }

              @media (max-width: 383px) {
                a {
                  padding: 10px 40px;
                }
              }

              @media (max-width: 232px) {
                a {
                  padding: 10px 20px;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 400px) {

  }

  @media (max-width: 225px) {
    .toggle {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
`;
