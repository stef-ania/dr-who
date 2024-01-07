'use client';

import styled from 'styled-components';
import LogoCadena from '../atoms/logoCadena';
import SocialLinks from '../molecules/socialLinks';

const FooterContainer = styled.footer`
  background-color: var(--general-bg);
  border-top: 1px solid var(--secondary-color);
`;

const FooterMaxWidthContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1120px) {
    margin: 0 auto;
    max-width: var(--max-width);
    min-height: 86px;
    padding: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMaxWidthContainer>
        <LogoCadena width={32} height={32} alt="Doctor Who Symbol"></LogoCadena>
        <SocialLinks></SocialLinks>
      </FooterMaxWidthContainer>
    </FooterContainer>
  );
};

export default Footer;
