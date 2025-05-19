"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const cartRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // TEMPORARY UNTIL WE HAVE AUTHENTICATION
  const isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  // Close profile if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      if (profileRef.current && !profileRef.current.contains(event.target)) {
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

  // Close cart if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCartOpen]);

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
        <div
          ref={profileRef}
          className="absolute p-4 rounded-md top-12 left-0 bg-cream text-black text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 profile-dropdown"
        >
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

      <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
        <Image
          src="/cart.png"
          alt="Cart Icon"
          width={25}
          height={25}
          className="cursor-pointer"
        />
        <div className="absolute bottom-4 left-5 w-4 h-4 bg-black rounded-full text-cream text-sm flex items-center justify-center">
          2
        </div>
      </div>

      {isCartOpen && (
        <div ref={cartRef} className="absolute top-12 right-0 z-20 cart-dropdown">
          <CartModal />
        </div>
      )}
    </div>
  );
};

export default NavIcons;
