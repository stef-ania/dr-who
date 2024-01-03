import Image from 'next/image';

const LogoCadena = ({ width, height, alt, ...rest }) => {
  const logoPath = '/assets/img/logos/logo-cadena.png';

  return <Image src={logoPath} alt={alt} width={width} height={height} {...rest} />;
};

export default LogoCadena;
