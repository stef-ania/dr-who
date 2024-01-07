import styled from 'styled-components';
import Button from '../atoms/button';
import doctorsList from '../../../../public/data/doctors.json';

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
    <div>
      {doctorsArray.doctors.map((eachCard, id) => (
        <div key={eachCard.id}>
          <CardContainer>
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
        </div>
      ))}
    </div>
  );
};

export default Cards;
