import styled from 'styled-components';
import Logo from '../atoms/logo';
import PrimaryNav from '../molecules/PrimaryNav';
import SearchBar from '../molecules/searchBar';
import SocialLinks from '../molecules/socialLinks';

const HeaderContainer = styled.header`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = () => {
  const navLinks = [
    { id: 1, link: '/conoce-a', text: 'Conoce a' },
    { id: 2, link: '/doctores', text: 'Doctores' },
    { id: 3, link: '/contacto', text: 'Contacto' },
  ];

  return (
    <HeaderContainer>
      <PrimaryNav links={navLinks} />
      <Logo width={190} height={195} alt="Doctor Who logo"></Logo>
      <SearchBar></SearchBar>
      <SocialLinks></SocialLinks>
    </HeaderContainer>
  );
};

export default Header;
