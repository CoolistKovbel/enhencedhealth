import Link from "next/link";
import React from "react";
import LogoutButton from "./logoutbutton";
import { getSession } from "../lib/action";
import Image from "next/image";

const MainHeader = async () => {
  const user = await getSession();

  const isLogged = user.isLoggedIn;

  return (
    <header className="flex items-center justify-between w-full bg-[#222] p-4 ">
      <h2 className="p-2 fomt-bold ">
        <Link href="/" className="flex items-center flex-row-reverse gap-4 font-bold">
          EpentricInstall
          {/* <Image src="/logo.png" alt=";ogsngs" width={80} height={80} /> */}
        </Link>
      </h2>

      <nav className="flex items-center justify-between w-[60%] bg-[#111] p-4 rounded-lg">
        {isLogged ? (
          <div className="w-[50%] flex items-center gap-4">
            <Link
              href="/request"
              className="bg-[#333] p-3 rounded-lg hover:bg-[#222]"
            >
              Request
            </Link>
            <Link
              href="/hub"
              className="bg-[#333] p-3 rounded-lg hover:bg-[#222]"
            >
              Hub
            </Link>
            <Link
              href="/profile"
              className="bg-[#333] p-3 rounded-lg hover:bg-[#222]"
            >
              Profile
            </Link>
          </div>
        ) : (
          <div className="w-[50%] flex items-center gap-4">
            <Link href="/quote">Get a quote</Link>
            
          </div>
        )}

        {isLogged ? (
          <div>
            <LogoutButton />
          </div>
        ) : (
          <div className="w-[50%] flex items-center justify-around">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;
