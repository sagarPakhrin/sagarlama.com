import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';

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
      <head>
        <meta name="author" content="Sagar Lama" />
        <meta name="twitter:creator" content="@sagarllp" />
        <meta name="twitter:url" content="https://twitter.com/sagarllp" />
        <meta name="twitter:site" content="@sagarllp" />
        <meta
          name="twitter:description"
          content="Sagar Lama is a Software Consultant at Avesha.io"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sagar Lama" />

        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:image:src" content="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="" />
        <meta
          property="og:description"
          content="Sagar Lama is a Software Consultant at Avesha.io"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
