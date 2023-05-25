import Header from '@/components/Header/Header';
import './globals.css';

export const metadata = {
  title: 'Sagar Lama',
  description: 'Sagar Lama is a software engineer based in Kathmandu, Nepal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
