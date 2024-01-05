import Card from '../molecules/card.jsx';
import doctorsList from '../../../../public/data/doctors.json';

export default function CardsGroup() {
  let cardArr = doctorsList;
  return (
    <div>
      {cardArr.doctors.map((eachCard, id) => (
        <div key={eachCard.id}>
          <Card
            imageSrc={eachCard.image}
            title={eachCard.doctor}
            subtitle={eachCard.actor}
            paragraph={eachCard.screen_time}
          />
        </div>
      ))}
    </div>
  );
}
