'use client';

import styled from 'styled-components';
import Carousel from './components/organisms/carousel';

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 0rem;
  max-height: 1080px;
`;

export default function Home() {
  return (
    <>
      <Main>
        <Carousel></Carousel>
      </Main>
    </>
  );
}
