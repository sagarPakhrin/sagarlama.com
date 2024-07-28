import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { cn } from "@/lib/utils";
import { UIProvider } from "@/context/ui-context";
import ErrorBoundary from "@/components/error-boundry/error-boundry";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagar Lama",
  description: "Software Engineer, Occasional Writer based in Kathmandu, Nepal",
  authors: [
    {
      name: "Sagar Lama",
    },
  ],
  openGraph: {
    title: "Sagar Lama",
    locale: "en_US",
  },
  twitter: {
    site: "@sagarllp",
    title: "",
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <Link
          href="#main"
          className={cn(
            "absolute left-[-999px] z-[999] padding-2 opacity-0",
            "focus:opacity-100 focus:left-0 w-full",
          )}
        >
          Skip to main content
        </Link>
        <ErrorBoundary>
          <div className="flex">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <UIProvider>{children}</UIProvider>
            </ThemeProvider>
          </div>
        </ErrorBoundary>
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
