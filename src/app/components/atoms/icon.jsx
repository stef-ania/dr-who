import Image from 'next/image';

const Icon = ({ name, width, height, size, ...rest }) => {
  const iconPath = `/assets/img/icons/${name}.svg`;

  return <Image src={iconPath} alt={name} width={width} height={height} {...rest} />;
};

export default Icon;
