import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Sagar Lama',
  description: 'Sagar Lama is a software engineer based in Kathmandu, Nepal.',
};

const isProduction = process.env.NODE_ENV === 'production';

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
        {isProduction && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-F3SQW5Q6XV"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-F3SQW5Q6XV');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
