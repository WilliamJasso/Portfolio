import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'William • Portfolio',
  description: 'Portfolio built with Next.js + Chakra UI + Formik',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
