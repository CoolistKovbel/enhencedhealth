"use client";

import Link from "next/link";
import { useState } from "react";
import LogoutButton from "./logoutbutton";

const UserHeaderDropdownmenu = () => {
  const [dropDown, setDropdown] = useState(false);

  const handleDropDown = async () => {
    try {
      console.log("handling");

      setDropdown((prev) => !prev);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="relative ">
      <button
        onClick={handleDropDown}
        className="bg-[#333] p-3 rounded-lg hover:bg-[#222]"
      >
        Profile
      </button>
      {dropDown && (
        <div className="absolute bg-[#222] w-[100px] h-fit p-2 text-center">
          <Link href="/profile">Profile</Link>

          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default UserHeaderDropdownmenu;
