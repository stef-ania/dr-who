'use client';
import styled from 'styled-components';
import Logo from '../atoms/logo';
import Icon from '../atoms/icon';
import PrimaryNav from '../molecules/PrimaryNav';
import SearchBar from '../molecules/searchBar';
import SocialLinks from '../molecules/socialLinks';
import Link from 'next/link';
import { useState } from 'react';

const HeaderContainer = styled.header`
  background-color: var(--general-bg);
  position: relative;
`;

const MaxWidthContainer = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1120px) {
    margin: 0 auto;
    max-width: var(--max-width);
    flex-direction: row;
    align-items: center;
    min-height: 186px;
  }
`;

/*
const isActiveWrap = styled.div`
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  margin: 0;
  padding: 0;
`;
*/

// Toggle Menu button
const ToggleMenu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 58px;
  width: 58px;

  @media screen and (min-width: 1120px) {
    display: none;
  }
`;

/* Logo and Toggle group */
const LogoAndToggleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  order: -1;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
  position: static;

  @media screen and (min-width: 1120px) {
    order: 0;
    justify-content: center;
    margin-top: 0.5rem;
    position: absolute;
    top: 2%;
    left: 0vw;
  }
`;

/* Search bar and Social links group */
const SearchAndSocialWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 1120px) {
    flex-direction: row;
    gap: 4rem;
    justify-content: flex-end;
    z-index: 1;
  }
`;

// Nav links:
const Header = () => {
  const navLinks = [
    { id: 1, link: '/discover', text: 'Conoce a' },
    { id: 2, link: '/doctors', text: 'Doctores' },
    { id: 3, link: '/contact', text: 'Contacto' },
  ];

  // Estado para controlar la visibilidad de los elementos en dispositivos móviles
  const [clicked, setclicked] = useState(false);

  // Función para manejar el clic en el botón de menú
  const handleToggleMenu = () => {
    setclicked(!clicked);
  };

  return (
    <HeaderContainer>
      <MaxWidthContainer>
        <PrimaryNav links={navLinks} className={`links ${clicked ? 'active' : ''}`} />

        <LogoAndToggleWrap>
          <Link href="/">
            <Logo width={190} height={195} alt="Doctor Who logo"></Logo>
          </Link>

          <ToggleMenu cliked={clicked} type="button" onClick={handleToggleMenu}>
            <Icon name="hamburguer-menu" width={58} height={58} />
          </ToggleMenu>
        </LogoAndToggleWrap>

        <SearchAndSocialWrap>
          <SearchBar></SearchBar>

          <SocialLinks></SocialLinks>
        </SearchAndSocialWrap>
      </MaxWidthContainer>
    </HeaderContainer>
  );
};

export default Header;
