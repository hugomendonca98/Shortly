/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { MenuStyled } from './styles';
import logo from '../../assets/images/logo.svg';

const Menu = () => {
    return (
        <MenuStyled>
            <div className="navegation">
                <ul className="menu">
                    <div className="menu-items">
                        <li className="logo">
                            <img src={logo} alt="Logo Shortly Url"/>
                        </li>
                        <li><a href="#">Funções</a></li>
                        <li><a href="#">Preços</a></li>
                        <li><a href="#">Recursos</a></li>
                    </div>
                    <div className='menu-spotlight'>
                        <li className="login"><a href="#">Entrar</a></li>
                        <li className="signup"><a href="#">Criar Conta</a></li>
                    </div>
                </ul>
            </div>
        </MenuStyled>
    );
}

export default Menu;