import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '../atoms/Button';
import CarouselButton from '../atoms/carouselButton';
import Link from 'next/link';

const images = ['/assets/img/carrusel/carrusel-1.webp', '/assets/img/carrusel/carrusel-2.jpg'];

const CarouselContainer = styled.div`
  width: 100vw;
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
  right: 4rem;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;

  @media (min-width: 1440px) {
    right: 6rem;
  }
`;

const TextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 24%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <CarouselContainer>
      <Image
        src={images[activeIndex]}
        width={1726}
        height={865}
        alt={`Image ${activeIndex + 1}`}
        style={{
          display: 'block',
          margin: '0 auto',
        }}
      />

      <MaxWidthContainer>
        <CarouselButtonsWrap>
          {images.map((_, index) => (
            <CarouselButton key={index} isActive={index === activeIndex} onClick={() => handleButtonClick(index)} />
          ))}
        </CarouselButtonsWrap>

        <TextWrap>
          <h2>The Giggle {activeIndex + 1} </h2>

          <ButtonContainer>
            <Button onClick={() => console.log('Button clicked')}>Ver ahora</Button>
          </ButtonContainer>
        </TextWrap>
      </MaxWidthContainer>
    </CarouselContainer>
  );
};

export default Carousel;
