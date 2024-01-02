import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Doctor Who | Home',
  description:
    'Discover the Doctor Who series from BBC. Dive into the world of its characters, catch up on the latest Doctor Who updates, and explore engaging games. Experience Doctor Who through its past, present, and upcoming adventures',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
