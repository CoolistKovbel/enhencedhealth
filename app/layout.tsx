import type { Metadata } from "next";
import { inter } from "./componets/ui/fonts";
import MainHeader from "./componets/mainheader";
import "./globals.css";
import MainFooter from "./componets/mainfooter";
import { ModalProvider } from "./componets/providers/model-provider";


export const metadata: Metadata = {
  title: "Defenmarketing",
  description:
    "Welcome to defenmarketing, a decentralized application allow you to be able to help or request to market. Earning you an extra buck just for marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <MainFooter />
        <ModalProvider />
      </body>
    </html>
  );
}
