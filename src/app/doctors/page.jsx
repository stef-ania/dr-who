'use client';

import React from 'react';
import styled from 'styled-components';
import Cards from '../components/molecules/cards';

const MainSubContainer = styled.section`
  padding: 1rem 1rem 4rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  @media screen and (min-width: 1120px) {
    margin: 0 auto;
    max-width: var(--max-width);
    padding: 4rem 1rem 8rem;
  }
`;

export default function DoctorsPage() {
  return (
    <>
      <main>
        <MainSubContainer>
          <h1>Doctores</h1>
          <Cards />
        </MainSubContainer>
      </main>
    </>
  );
}
