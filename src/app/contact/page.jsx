'use client';
import React from 'react';
import styled from 'styled-components';
import Form from '../components/molecules/form';
const Main = styled.main`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;
const MainSubContainer = styled.section`
  padding: 1rem 1rem 4rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  @media screen and (min-width: 1120px) {
    margin: 0 auto;
    max-width: var(--max-width);
    padding: 4rem 1rem 8rem;
    flex-direction: row;
    justify-content: space-between;
    h1 {
      max-width: 50%;
    }
  }
`;
const DecorativeOrnamentOne = styled.img`
  position: absolute;
  top: 40%;
  left: -30%;
  z-index: -1;
  max-width: 253px;
  @media screen and (min-width: 1120px) {
    top: 51%;
    left: 13%;
    max-width: 329px;
  }
`;
const DecorativeOrnamentTwo = styled.img`
  position: absolute;
  top: 30%;
  right: -30%;
  z-index: -1;
  max-width: 300px;
  @media screen and (min-width: 1120px) {
    top: 23%;
    right: 44%;
    max-width: 600px;
  }
`;
const DecorativeOrnamentThree = styled.img`
  position: absolute;
  top: 23%;
  left: 2%;
  z-index: -1;
  max-width: 243px;
  @media screen and (min-width: 1120px) {
    top: 25%;
    left: 16%;
    max-width: 279px;
  }
`;
const DiscoverPage = () => {
  return (
    <Main>
      {' '}
      <MainSubContainer>
        {' '}
        <DecorativeOrnamentOne src="/assets/img/svg/vencer.svg" alt="Ornament"></DecorativeOrnamentOne>{' '}
        <DecorativeOrnamentTwo src="/assets/img/svg/resistencia.svg" alt="Ornament"></DecorativeOrnamentTwo>{' '}
        <DecorativeOrnamentThree src="/assets/img/svg/persistencia.svg" alt="Ornament"></DecorativeOrnamentThree>{' '}
        <h1>Envia tu mensaje al doctor</h1> <Form></Form>{' '}
      </MainSubContainer>{' '}
    </Main>
  );
};
export default DiscoverPage;
