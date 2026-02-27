// import type { Metadata } from "next";
// import { Playfair_Display, Inter } from "next/font/google";
// import "./globals.css";
// import { Geist,Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";

// const geistSans = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-serif",
//   display: "swap",
// });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Anurag's Space",
//   description: "Projects, writings, and things I’m building.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html
//       lang="en"
//       className={`${playfair.variable} ${inter.variable}`}
//     >
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag's Space",
  description: "Projects, writings, and things I’m building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
