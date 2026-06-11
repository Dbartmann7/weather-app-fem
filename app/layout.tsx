import {Bricolage_Grotesque, DM_Sans} from 'next/font/google'

import type { Metadata } from "next";
import "./globals.css";
import UnitProvider from './util/UnitContext';
import PageHeader from './(components)/Main/Components/PageHeader/PageHeader';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${dmSans.className} ${bricolageGrotesque.variable} flex flex-col p-5 pb-10 xl:pb-24`}>
        <UnitProvider>
          <PageHeader/>
          {children}
        </UnitProvider>
      </body>
    </html>
  );
}
