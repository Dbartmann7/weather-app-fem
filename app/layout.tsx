import {Bricolage_Grotesque, DM_Sans} from 'next/font/google'

import type { Metadata } from "next";
import "./globals.css";
;

const dmSans = DM_Sans({
  subsets:["latin"],
  variable:'--font-dm-sans'
})

const bricolageGrotesque = Bricolage_Grotesque({
  subsets:['latin'],
  variable:"--font-bricolage-grotesque"
})

export const metadata: Metadata = {
  title: "FEM Weather App",
  description: "My attempt at the FrontEnd Mentors Weather App Challenge",
  icons:{
    icon:"/favicon-32x32.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${bricolageGrotesque.variable}`}>
        {children}
      </body>
    </html>
  );
}
