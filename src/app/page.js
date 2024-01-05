//import Image from 'next/image';
'use client';

import styles from './page.module.css';
import Carousel from './components/organisms/carousel';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Get started with Dr Who</p>
        </div>
        <Carousel></Carousel>
      </main>
    </>
  );
}
