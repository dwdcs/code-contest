import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SiliconPin - Web Hosting Guides & Tutorials",
  description: "Comprehensive guides and tutorials on Node.js, PHP, Python, and other web hosting technologies for developers and system administrators.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/hosting-icon.svg', type: 'image/svg+xml' },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="loading" suppressHydrationWarning>
      <head>
        <Script id="prevent-flash" strategy="beforeInteractive">
          {`
            (function() {
              try {
                // Add loading class to document to indicate SSR state
                document.documentElement.classList.add('loading');
              } catch (e) {
                console.error(e);
              }
            })();
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ClientBody>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ClientBody>
      </body>
    </html>
  );
}
