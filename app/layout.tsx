import type { Metadata } from "next";
import { inter } from "./componets/ui/fonts";
import MainHeader from "./componets/mainheader";
import "./globals.css";
import MainFooter from "./componets/mainfooter";
import { ModalProvider } from "./componets/providers/model-provider";

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSession } from "./lib/action";

export const metadata: Metadata = {
  title: "Ejurwonder Service ",
  description:
    "Welcome to Ejurwonder Service  , a service in which we can help you with your kitchken, bed, and bathroom coridors, or even help install applicences, bringong you a happy home without the too much of the hassle. Afforable allowing you to use crypto as our #1 paymant source",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const user = await getSession();


  return (
    <html lang="en">
      <body className={inter.className}>

        <MainHeader userr={user} />
        {children}
        <MainFooter />
        <ToastContainer />
        <ModalProvider />
      </body>
    </html>
  );
}
