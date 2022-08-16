import React from 'react';

import { HeaderStyled } from './styles';
import HeaderImg from '../../assets/images/illustration-working.svg';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="header">
                <div className="header-flex">
                    <h1>Mais do que apenas links curtos</h1>
                    <p>Crie o reconhecimento da sua marca e obtenha informações detalhadas sobre o desempenho dos seus links.</p>
                    <a href='#shorten'>Começar</a>
                </div>
            </div>
            <img src={HeaderImg} alt="Illustration working"/>
        </HeaderStyled>
    );
}

export default Header;