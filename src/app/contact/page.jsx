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
  top: 30%;
  left: -30%;
  z-index: -1;
  max-width: 359px;

  @media screen and (min-width: 1120px) {
    top: 55%;
    left: 8%;
    max-width: 417px;
  }
`;

const DecorativeOrnamentTwo = styled.img`
  position: absolute;
  top: 10%;
  right: -30%;
  z-index: -1;
  max-width: 407px;

  @media screen and (min-width: 1120px) {
    top: 0;
    right: 28%;
    max-width: 641px;
  }
`;

const DiscoverPage = () => {
  return (
    <Main>
      <MainSubContainer>
        <DecorativeOrnamentOne src="/assets/img/svg/persistencia-2.svg" alt="Ornament"></DecorativeOrnamentOne>
        <DecorativeOrnamentTwo src="/assets/img/svg/resistencia.svg" alt="Ornament"></DecorativeOrnamentTwo>
        <h1>Envia tu mensaje al doctor</h1>
        <Form></Form>
      </MainSubContainer>
    </Main>
  );
};

export default DiscoverPage;
