import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./globals.css";


const urbanist= Urbanist({
  subsets:["latin"]
})


export const metadata: Metadata = {
  title: "Journey Pro",
  description: "Transport Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} `}>
        {children}
      </body>
    </html>
  );
}
