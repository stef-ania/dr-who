'use client';

import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/button';
import Image from 'next/image';

const MainContainer = styled.main`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'heading'
    'image'
    'paragraph'
    'button';
  padding: 1rem;
  text-align: center;
  gap: 1rem;

  @media screen and (min-width: 1120px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'heading image'
      'paragraph image'
      'button image';
    margin: 0 auto;
    max-width: var(--max-width);
    padding: 3rem 0;
  }
`;

const Heading = styled.h1`
  text-align: center;
  grid-area: heading;
  margin-bottom: 1rem;

  @media screen and (min-width: 1120px) {
    grid-column: 1 / 2;
  }
`;

const Paragraph = styled.p`
  grid-area: paragraph;
  margin-bottom: 1rem;

  @media screen and (min-width: 1120px) {
    grid-column: 1 / 2;
  }
`;

const ButtonContainer = styled.div`
  grid-area: button;
  max-width: 450px;
  margin: 1rem auto 4rem;

  @media screen and (min-width: 1120px) {
    grid-column: 1 / 2;
    margin: 0 auto;
  }
`;

const ImageContainer = styled.div`
  grid-area: image;
  grid-column: 1 / 2;

  img {
    width: 306px;
    height: auto;
    margin: 0 auto;
  }

  @media screen and (min-width: 1120px) {
    grid-column: 2 / 3;

    img {
      width: auto;
    }
  }
`;

const DiscoverPage = () => {
  return (
    <MainContainer>
      <GridContainer>
        <Heading>Conoce a ... decimotercera doctor</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur. Convallis maecenas ac pharetra metus justo amet nunc amet. Hac
          pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra
          gravida interdum nam.
        </Paragraph>
        <ButtonContainer>
          <Button href="https://www.doctorwho.tv/" target="_blank">
            Click me
          </Button>
        </ButtonContainer>

        <ImageContainer>
          <Image
            src="/assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker_big.jpg"
            alt="Thirteenth Doctor Jodie Whittaker"
            width={606}
            height={814}
          />
        </ImageContainer>
      </GridContainer>
    </MainContainer>
  );
};

export default DiscoverPage;
