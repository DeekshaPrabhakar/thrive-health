import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import GraphQLProvider from './graphQLProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Thrive - Health through food',
  description: 'Thrive is a food tracking app that helps you track your food intake and improve your health.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto px-8 py-1`}>
        <GraphQLProvider>
          <Header />
          {children}
        </GraphQLProvider>
      </body>
    </html>
  );
}
