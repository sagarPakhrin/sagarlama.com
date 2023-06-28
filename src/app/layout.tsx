import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Sagar Lama',
  description: 'Sagar Lama is a software engineer based in Kathmandu, Nepal.',
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
        <meta name="author" content="Sagar Lama" />
        <meta name="twitter:creator" content="@sagarllp" />
        <meta name="twitter:url" content="https://twitter.com/sagarllp" />
        <meta name="twitter:site" content="@sagarllp" />
        <meta
          name="twitter:description"
          content="Sagar Lama is a Fullstack Software Developer"
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
          content="Sagar Lama is a Fullstack Software Developer"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
