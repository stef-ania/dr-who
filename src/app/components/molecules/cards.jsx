import styled from 'styled-components';
import Button from '../atoms/button';
import doctorsList from '../../../../public/data/doctors.json';

const GroupCardsWrap = styled.div`
  display: grid;
  grid-row-gap: 4rem;
  grid-column-gap: 2.6rem;
  max-width: 19.625rem; // tamaño img como referencia
  grid-template-columns: repeat(1, 1fr);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
  }

  @media screen and (min-width: 1120px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-column-gap: 3rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonWrap = styled.div`
  margin: 0;
  padding: 0;
`;

const Cards = () => {
  let doctorsArray = doctorsList;
  return (
    <GroupCardsWrap>
      {doctorsArray.doctors.map((eachCard, id) => (
        <CardContainer key={eachCard.id}>
          <img src={eachCard.image} alt={eachCard.doctor} width={314} height={459} />
          <h3>{eachCard.doctor}</h3>
          <em>{eachCard.actor}</em>
          <p>{eachCard.screen_time}</p>
          <ButtonWrap>
            <Button $medium href="https://www.doctorwho.tv/" target="_blank">
              Ver más
            </Button>
          </ButtonWrap>
        </CardContainer>
      ))}
    </GroupCardsWrap>
  );
};

export default Cards;
