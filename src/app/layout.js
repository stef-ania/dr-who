import { Lato, Montserrat } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './registry';
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';

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
    'Descubre la serie Doctor Who de la BBC. Sumérgete en el mundo de sus personajes, ponte al día con las últimas actualizaciones de Doctor Who y explora juegos atractivos. Experimenta Doctor Who a través de sus aventuras pasadas, presentes y futuras.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <StyledComponentsRegistry>
        <body className={montserrat.className}>
          <Header></Header>
          {children}
          <Footer></Footer>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
