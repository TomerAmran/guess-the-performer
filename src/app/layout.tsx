import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { TRPCReactProvider } from "~/trpc/react";
import { auth } from "~/server/auth";
import { ThemeProvider } from "./_components/ThemeProvider";
import { ToastProvider } from "./_components/ToastProvider";

export const metadata: Metadata = {
  title: "Guess the Performer",
  description: "A classical music game",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme - defaults to dark */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || (!theme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body 
        className="bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] transition-colors duration-300" 
        style={{ fontFamily: 'var(--font-body), sans-serif' }}
      >
        <SessionProvider session={session}>
          <TRPCReactProvider>
            <ThemeProvider>
              <ToastProvider>{children}</ToastProvider>
            </ThemeProvider>
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
