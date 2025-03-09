"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  //TEMPORARY UNTIL WE HAVE AUTHENTICATION
  const isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the clicked target is outside the profile dropdown
      if (!(event.target instanceof HTMLElement)) return; // Safeguard for non-HTML events
      if (!event.target.closest(".profile-dropdown")) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isProfileOpen]);

  return (
    <div className="flex items-center relative gap-x-4">
      <Image
        src="/profile.png"
        alt="Profile Icon"
        width={25}
        height={25}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-cream text-black text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 profile-dropdown">
          
          <Link href="/" className="block">Профил</Link>
          <div className="mt-2 cursor-pointer">Отпиши се</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="Notifications Icon"
        width={25}
        height={25}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
      <Image
        src="/cart.png"
        alt="Cart Icon"
        width={25}
        height={25}
        className="cursor-pointer"
        onClick={()=> setIsCartOpen((prev) => !prev)}
      />
      <div className="absolute  bottom-4 left-5 w-4 h-4 bg-black rounded-full text-cream text-sm flex items-center justify-center">2</div>
      </div>
      {isCartOpen && <CartModal/>}
    </div>
  );
};

export default NavIcons;
