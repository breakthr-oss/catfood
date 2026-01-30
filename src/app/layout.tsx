import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cat Food Reviews - Find the Best Food for Your Feline Friend',
  description: 'Expert reviews and ratings of the best cat food brands. Discover top-rated cat food options for your beloved pet.',
  openGraph: {
    title: 'Cat Food Reviews - Find the Best Food for Your Feline Friend',
    description: 'Expert reviews and ratings of the best cat food brands.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
