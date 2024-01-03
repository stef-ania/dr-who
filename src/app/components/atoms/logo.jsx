import Image from 'next/image';

const Logo = ({ width, height, alt, ...rest }) => {
  const logoPath = '/assets/img/logos/logo.png';

  return <Image src={logoPath} alt={alt} width={width} height={height} {...rest} />;
};

export default Logo;
