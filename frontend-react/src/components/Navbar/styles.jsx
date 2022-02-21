import styled from 'styled-components'
import { Link } from 'wouter'

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 4vw;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  box-shadow: 0 13px 28px 0px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.colors.dark};
`

export const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background: transparent;
  h1 {
    color: black;
  }

  li {
    height: 100%;
    font-weight: 400;
    text-align: center;
    font-size: 1.6rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
      &:hover {
        border: none;
      }
    }
  }
`

export const NavMenu = styled.ul`
  font-size: 1rem;
  display: flex;
  gap: 1em;
  transition: all 0.3s linear;
  list-style-type: none;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    box-shadow: 8px 13px 28px 0px rgba(0, 0, 0, 0.76);
    flex-direction: column;
    width: 50%;
    top: 5rem;
    position: absolute;
    right: ${({ showNavMenu }) => (showNavMenu ? '0%' : '-50%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.colors.dark};
  }
`

export const Logo = styled.img`
  height: 3.5rem;
  object-fit: scale-down;
`

export const LinksLabel = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.1s ease-in-out;
  }
  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const BurgerIcon = styled.div`
  color: #000;
  display: none;
  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    display: flex;
    cursor: pointer;
  }
`
