import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { CartProvider } from '@/context/Cart';
import { MetricaProvider } from '@/context/Metrica';

import '../assets/styles/globals.css';
import '../assets/styles/vars.css';

const helvetica = localFont({
  src: [
    {
      path: '../assets/fonts/helvetica_regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/helvetica_bold.otf',
      weight: '600',
      style: 'normal'
    }
  ]
});

export const metadata: Metadata = {
  title: 'Nasa Kvartirka',
  description: 'Test'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={`body ${helvetica.className}`}>
        <Header />
        <CartProvider>
          <MetricaProvider>
            <main className='main'>{children}</main>
          </MetricaProvider>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
