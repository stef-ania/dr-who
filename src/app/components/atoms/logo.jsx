import styled from 'styled-components';
import Image from 'next/image';

const StyledLogo = styled(Image)`
  max-width: 5.851rem;
  max-height: 5.99494rem;

  @media screen and (min-width: 1120px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Logo = ({ width, height, alt, ...rest }) => {
  const logoPath = '/assets/img/logos/logo.png';

  return <StyledLogo src={logoPath} alt={alt} width={width} height={height} {...rest} />;
};

export default Logo;
