//import Image from 'next/image';
'use client';

import styles from './page.module.css';
import Logo from './components/atoms/logo';
import Input from './components/atoms/input';
import Textarea from './components/atoms/textarea';
import SearchBar from './components/molecules/searchBar';

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
        </div>
        <SearchBar></SearchBar>
      </main>
    </>
  );
}
