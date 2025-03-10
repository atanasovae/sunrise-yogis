"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../../src/styles/menu.scss";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        src="/menu.png"
        alt="Menu"
        width={25}
        height={25}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="menu fixed top-20 left-0 w-full bg-yellow text-black p-4 flex flex-col items-center justify-center gap-8 z-10 font-light font-cormorant">
          <Link href="/" className="block">Начало</Link>
          <Link href="/" className="block">Пазарувай</Link>
          <Link href="/" className="block">Промоции</Link>
          <Link href="/" className="block">За нас</Link>
          <Link href="/" className="block">Контакти</Link>
          <Link href="/" className="block">Отпиши се</Link>
          <Link href="/" className="block">Количка(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
