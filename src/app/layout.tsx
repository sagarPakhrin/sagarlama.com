import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Sagar Lama',
  description: 'Sagar Lama is a software engineer based in Kathmandu, Nepal.',
  authors: [
    {
      name: 'Sagar Lama',
    },
  ],
  openGraph: {
    title: 'Sagar Lama',
    locale: 'en_US',
  },
  twitter: {
    site: '@sagarllp',
    title: '',
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
