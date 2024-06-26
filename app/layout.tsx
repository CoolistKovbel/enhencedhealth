import type { Metadata } from "next";
import { inter } from "./componets/ui/fonts";
import MainHeader from "./componets/mainheader";
import "./globals.css";
import MainFooter from "./componets/mainfooter";
import { ModalProvider } from "./componets/providers/model-provider";

export const metadata: Metadata = {
  title: "EEjurwonder Home Service ",
  description:
    "Welcome to Ejurwonder Home Service  , a service in which we can help you with your kitchken, bed, and bathroom coridors, or even help install applicences, bringong you a happy home without the too much of the hassle. Afforable allowing you to use crypto as our #1 paymant source",
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
