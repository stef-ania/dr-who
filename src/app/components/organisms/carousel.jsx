import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import CarouselButton from '../atoms/carouselButton';

// Listado imágenes
const images = ['/assets/img/carrusel/carrusel-1.jpg', '/assets/img/carrusel/carrusel-2.jpg'];

const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

const MaxWidthContainer = styled.div`
  margin: 0 1rem;

  @media screen and (min-width: 1120px) {
    margin: 0 auto;
    max-width: var(--max-width);
    padding: 1rem;
  }
`;

const CarouselButtonsWrap = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 40rem;
  display: flex;
  gap: 1rem;

  @media screen and (min-width: 1120px) {
    right: 4rem;
    transform: translateX(-50%);
  }

  @media (min-width: 1440px) {
    right: 6rem;
  }
`;

const TextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 39%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: 1120px) {
    left: 8%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ImageResponsiveCrop = styled.img`
  object-fit: cover;
  max-height: 860px;

  @media (min-width: 1120px) {
    object-fit: fill;
    width: 100vw;
    max-height: 1080px;
  }
`;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <CarouselContainer>
      <ImageResponsiveCrop src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} />

      <MaxWidthContainer>
        <CarouselButtonsWrap>
          {images.map((_, index) => (
            <CarouselButton key={index} isActive={index === activeIndex} onClick={() => handleButtonClick(index)} />
          ))}
        </CarouselButtonsWrap>

        <TextWrap>
          {activeIndex === 1 ? <h2>Allons-y</h2> : <h2>The Giggle {activeIndex + 1}</h2>}

          <ButtonContainer>
            <Button onClick={() => console.log('Button clicked')} href="https://www.doctorwho.tv/" target="_blank">
              Ver ahora
            </Button>
          </ButtonContainer>
        </TextWrap>
      </MaxWidthContainer>
    </CarouselContainer>
  );
};

export default Carousel;
