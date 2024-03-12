import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ApolloWrapper } from '@/lib/apollo/apollo-wrapper';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '900']
});

export const metadata: Metadata = {
  title: 'Haven',
  description: 'Villa Agency'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} ${poppins.variable}`}>
        <ApolloWrapper>
          <Header/>
          {children}
          <Footer/>
        </ApolloWrapper>
      </body>
    </html>
  );
}
