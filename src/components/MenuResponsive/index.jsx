/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { MenuStyled } from './styles';
import logo from '../../images/logo.svg';

const Menu = () =>{

    const divLinksRef = useRef(null);

    function toggle() {
        // se a class open não estiver na div add, se estiver remove. (Function toggle)
        divLinksRef.current.classList.toggle('open');

    }

    return(
        <MenuStyled>
            <div className="toggle">
                <li className="logo">
                    <img src={logo} alt="Logo Shortly Url"/>
                </li>
                <i onClick={toggle}>
                    <FontAwesomeIcon icon={faBars}/>
                </i>
            </div>
            <div ref={divLinksRef} className="links">
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
            </div>
      </MenuStyled>
    );
}

export default Menu;