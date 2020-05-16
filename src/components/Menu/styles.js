import styled from 'styled-components';

import { NeutralGrayishViolet, PrimaryCyan, NeutralVeryDarkBlue } from '../../Global/Styles/Colors';

export const MenuStyled = styled.div`

    div.navegation {
        width: 90%;
        margin: auto;
        padding-top: 30px;
        font-family: 'Poppins', sans-serif;
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
`