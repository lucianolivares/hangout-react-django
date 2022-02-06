import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHamburger, FaTimes } from 'react-icons/fa';
import {
  BurgerIcon,
  FlexContainer,
  LinksLabel,
  Logo,
  NavbarContainer,
  NavMenu,
} from './NavbarElements';
import logoBlanco from '../../images/logoBlanco.png';

function Navbar() {
  const [smallScreen, setScreen] = useState(false);

  const handleClick = () => setScreen(!smallScreen);
  const closeMobileMenu = () => setScreen(false);
  return (
    <NavbarContainer>
      <FlexContainer>
        <Link to="/" onClick={closeMobileMenu}>
          <Logo src={logoBlanco} alt="Logo" />
        </Link>
      </FlexContainer>

      <FlexContainer>
        <BurgerIcon onClick={handleClick}>
          {smallScreen ? <FaTimes /> : <FaHamburger />}
        </BurgerIcon>
        <NavMenu
          smallScreen={smallScreen}
          onClick={handleClick}
          activeClass="activate"
        >
          <li>
            <LinksLabel to="/">Home</LinksLabel>
          </li>
          <li>
            <LinksLabel to="/restaurants">Restaurantes</LinksLabel>
          </li>
          <li>
            <LinksLabel to="/categories">Categorias</LinksLabel>
          </li>
          <li>
            <LinksLabel to="/about-us">Quienes somos</LinksLabel>
          </li>
          <li>
            <LinksLabel to="/sign-up">Registro</LinksLabel>
          </li>
        </NavMenu>
      </FlexContainer>
    </NavbarContainer>
  );
}

export default Navbar;
