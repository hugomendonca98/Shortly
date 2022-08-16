import styled from 'styled-components';

import BgBoostDesktop from '../../assets/images/bg-boost-desktop.svg';
import { PrimaryDarkViolet, PrimaryCyan } from '../../global/colors';

export const BoostStyled = styled.div`
    background-image: url(${BgBoostDesktop});
    background-color:  ${PrimaryDarkViolet};
    background-size: cover;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;

    div {
        
        h1 {
            color: #fff;
        }

        button {
            background-color: ${PrimaryCyan};
            color: #fff;
            font-size: 15px;
            padding: 15px 35px;
            border-radius: 25px;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            margin-top: 20px;
        }
    }
    @media (max-width: 425px) {
        div {
            h1 {
                font-size: 24px;
            }
        }
    }
`