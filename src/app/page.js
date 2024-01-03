import Image from 'next/image';
import styles from './page.module.css';
import Logo from './components/atoms/logo';
// import LogoCadena from './components/atoms/logoCadena';

export default function Home() {
  return (
    <>
      <header>
        <Logo width={94} height={94} alt="Doctor Who" />
      </header>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Get started with Dr Who</p>
        </div>
      </main>
    </>
  );
}
