import ErrorBoundary from "@/components/error-boundry/error-boundry";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/context/theme-provider";
import { UIProvider } from "@/context/ui-context";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagar Lama",
  description: "Senior Software Engineer at Monotype, Occasional Writer based in Kathmandu, Nepal",
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
            "absolute left-[-999px] z-[1] padding-2 opacity-0",
            "focus:opacity-100 focus:left-0 w-full focus:z-20",
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
              <SidebarProvider className="overflow-hidden">
                <AppSidebar />
                <UIProvider>{children}</UIProvider>
              </SidebarProvider>
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
