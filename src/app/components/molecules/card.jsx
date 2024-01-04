import Image from 'next/image';
import styled from 'styled-components';
import Button from '../atoms/button';

const CardContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Card = ({ doctorsData }) => {
  if (!doctorsData) {
    return <p>No hay datos disponibles.</p>;
  }

  return (
    <CardContainer>
      <ul>
        {doctorsData.map((data) => (
          <li key={data.id}>
            <div>
              {/* Asegúrate de que la ruta de la imagen sea correcta */}
              <Image src={data.image} width={314} height={459} alt={data.doctor} />
              <h3>{data.doctor}</h3>
              <em>{data.actor}</em>
              <p>{data.screen_time}</p>
              <Button $medium>Ver más</Button>
            </div>
          </li>
        ))}
      </ul>
    </CardContainer>
  );
};

export const getStaticProps = async () => {
  try {
    // Utiliza una ruta relativa para acceder al archivo JSON
    const response = await fetch('/data/doctors.json');
    const { doctors } = await response.json();

    console.log('doctors:', doctors);

    return {
      props: {
        doctorsData: doctors,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        doctorsData: [],
      },
    };
  }
};

export default Card;
