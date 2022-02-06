import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHamburger, FaTimes } from 'react-icons/fa'
import {
  BurgerIcon,
  FlexContainer,
  LinksLabel,
  Logo,
  NavbarContainer,
  NavMenu
} from './styles'
import logoBlanco from '../../images/logoBlanco.png'

function Navbar () {
  const [showNavMenu, setShowNavMenu] = useState(false)

  const handleClick = () => setShowNavMenu(!showNavMenu)

  return (
    <NavbarContainer>
      <FlexContainer>
        <Link to='/'>
          <Logo src={logoBlanco} alt='Logo' />
        </Link>
      </FlexContainer>

      <FlexContainer>
        <BurgerIcon onClick={handleClick}>
          {showNavMenu ? <FaTimes /> : <FaHamburger />}
        </BurgerIcon>
        <NavMenu
          showNavMenu={showNavMenu}
          onClick={handleClick}
          activeClass='activate'
        >
          <li>
            <LinksLabel to='/'>Home</LinksLabel>
          </li>
          <li>
            <LinksLabel to='/restaurants'>Restaurantes</LinksLabel>
          </li>
          <li>
            <LinksLabel to='/categories'>Categories</LinksLabel>
          </li>
          <li>
            <LinksLabel to='/about-us'>Quienes somos</LinksLabel>
          </li>
          <li>
            <LinksLabel to='/sign-up'>Registro</LinksLabel>
          </li>
        </NavMenu>
      </FlexContainer>
    </NavbarContainer>
  )
}

export default Navbar
