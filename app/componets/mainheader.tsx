"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import LogoutButton from "./logoutbutton";
import { getSession } from "../lib/action";
import Image from "next/image";
import UserHeaderDropdownmenu from "./userHeaderDropdownmenu";

const MainHeader = () => {
  const [userr, setUserr] = useState<any>();

  useEffect(() => {
    const gg = async () => {
      const user = await getSession();
      setUserr(user);
    };

    gg();
  }, []);

  const isLogged = userr?.isLoggedIn;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between w-full bg-[#222] p-4 relative">
      <h2 className="p-2 font-bold">
        <Link href="/" className="flex items-center flex-row-reverse">
          Ejurwonder Service
          <Image src="/EIS3.png" alt="logo" width={80} height={80} />
        </Link>
      </h2>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <nav
        className={`${
          isMobileMenuOpen ? "block absolute" : "hidden"
        } md:flex items-center justify-between w-[80%] md:w-auto bg-[#111] top-[80px] right-5 md:bg-[#666] p-4  rounded-lg z-[60]`}
      >
        {isLogged ? (
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <Link
              href="/request"
              className="bg-[#333] p-3 rounded-lg hover:bg-[#222] mb-2 md:mb-0"
            >
              Request
            </Link>
            <Link
              href="/hub"
              className="bg-[#333] p-3 rounded-lg hover:bg-[#222] mb-2 md:mb-0"
            >
              Hub
            </Link>
            <UserHeaderDropdownmenu />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            <Link
              href="/quote"
              className="p-2 bg-green-500 rounded-lg dropshadow-lg font-bold hover:bg-[#222] mb-2 md:mb-0"
            >
              Get a quote
            </Link>
            <Link
              href="/mint"
              className="p-2 bg-red-500 rounded-lg dropshadow-lg font-bold hover:bg-[#222] mb-2 md:mb-0"
            >
              Mint
            </Link>
          </div>
        )}

        {!isLogged && (
          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            <Link href="/login" className="p-2 text-white">
              Login
            </Link>
            <Link href="/register" className="p-2 text-white">
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;
