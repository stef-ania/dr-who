import Image from 'next/image';
import styled from 'styled-components';
import Button from '../atoms/button';

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Card = ({ imageSrc, title, subtitle, paragraph }) => {
  return (
    <CardContainer>
      <Image src={imageSrc} width={314} height={459} alt={title} sizes="(max-width: 480px) 100%" />
      <h3>{title}</h3>
      <em>{subtitle}</em>
      <p>{paragraph}</p>
      <Button $medium>Ver más</Button>
    </CardContainer>
  );
};

export default Card;
