import type { Metadata } from "next";
import { inter } from "./componets/ui/fonts";
import MainHeader from "./componets/mainheader";
import "./globals.css";
import MainFooter from "./componets/mainfooter";
import { ModalProvider } from "./componets/providers/model-provider";


export const metadata: Metadata = {
  title: "EpentricInstall",      
  description:
    "Welcome to EpentricInstall , a service in which we help others with installations from home appliaences to other devices, where you can pay with crypto",
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
