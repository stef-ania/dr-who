//import Image from 'next/image';
'use client';

import styles from './page.module.css';
import Logo from './components/atoms/logo';
import Input from './components/atoms/input';
import Textarea from './components/atoms/textarea';
import CarouselButton from './components/atoms/carouselButton';
//import Button from './components/atoms/button';
// import LogoCadena from './components/atoms/logoCadena';
//import Icon from './components/atoms/icon';

export default function Home() {
  return (
    <>
      <header>
        <Logo width={94} height={94} alt="Doctor Who" />
      </header>
      <main className={styles.main}>
        <div className={styles.description}>
          <Input type="text" name="username" id="username" placeholder="Nombre de usuario" required />
          <Input type="submit" value="Enviar" />
          <p>Get started with Dr Who</p>
          <Textarea name="message" id="message" placeholder="Holi" maxLength="300" />
          <CarouselButton></CarouselButton>
        </div>
      </main>
    </>
  );
}
