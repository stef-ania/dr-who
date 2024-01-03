import { Lato, Montserrat } from 'next/font/google';
import './globals.css';

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['700', '900'],
});

export const metadata = {
  title: 'Doctor Who | Home',
  description:
    'Discover the Doctor Who series from BBC. Dive into the world of its characters, catch up on the latest Doctor Who updates, and explore engaging games. Experience Doctor Who through its past, present, and upcoming adventures',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
