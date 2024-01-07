//import Image from 'next/image';
'use client';

import Card from './components/molecules/card';
import styles from './page.module.css';
import CardsGroup from './components/organisms/cardsGroup';
import Cards from './components/molecules/cards';
//import Card from './components/molecules/card.jsx';
import Carousel from './components/organisms/carousel';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Get started with Dr Who</p>
        </div>
        <Carousel></Carousel>
        <Cards></Cards>

        {/* <CardsGroup></CardsGroup> */}
      </main>
    </>
  );
}
