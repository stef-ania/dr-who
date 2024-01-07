import Image from 'next/image';
import styled from 'styled-components';
import Button from '../atoms/button';
// Añadir Link from Next para añadir el enlace

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Card = ({ imageSrc, doctor, actor, screen_time }) => {
  return (
    <CardContainer>
      <img src={imageSrc} alt={doctor} width={314} height={459} />
      {/*<Image src={imageSrc} width={314} height={459} alt={doctor} sizes="(max-width: 480px) 100%" />*/}
      <h3>{doctor}</h3>
      <em>{actor}</em>
      <p>{screen_time}</p>
      <Button $medium href="https://www.doctorwho.tv/" target="_blank">
        Ver más
      </Button>
    </CardContainer>
  );
};

export default Card;
