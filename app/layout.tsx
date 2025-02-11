import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import { ReactNode } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from '../node_modules/next-auth/react';
import { auth } from "@/auth";

const ibmPlexSans = localFont({
  src: [
    { path: './fonts/IBMPlexSans-Regular.ttf', weight: '400', style: 'normal'},
    { path: './fonts/IBMPlexSans-Medium.ttf', weight: '500', style: 'normal'},
    { path: './fonts/IBMPlexSans-SemiBold.ttf', weight: '600', style: 'normal'},
    { path: './fonts/IBMPlexSans-Bold.ttf', weight: '700', style: 'normal'},
  ]
});

const bebasNeue = localFont({
  src: [
    { path: './fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal'},
  ],
  variable: '--bebas-neue'
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "JdonL Movies",
  description: "JdonL is a website hosting videos created from JdonL BumpEast Media",
};

const RootLayout = async ({ children }: {  children: ReactNode }) => {
  const session = await auth()
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}

export default RootLayout;
