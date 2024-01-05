import styled from 'styled-components';
import Image from 'next/image';

const StyledLogo = styled(Image)`
  max-width: 5.851rem;
  height: 5.99494rem;

  @media screen and (min-width: 1120px) {
    max-width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    //position: absolute;
  }
`;

const Logo = ({ width, height, alt, ...rest }) => {
  const logoPath = '/assets/img/logos/logo.png';

  return <StyledLogo src={logoPath} alt={alt} width={width} height={height} {...rest} />;
};

export default Logo;
