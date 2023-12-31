import "@/styles/globals.css";

import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { cookies } from "next/headers";
import { env } from "@/env.mjs";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <TRPCReactProvider cookies={cookies().toString()}>
              <main className="mx-auto max-w-3xl p-6 md:p-0 h-screen">
                <Navbar />
                {children}
              </main>
            </TRPCReactProvider>
          </ClerkProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
