import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
// import NavIcons from "./NavIcons";
import "@/styles/menu.scss";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="w-full h-20 px-7 relative bg-yellow text-black font-cormorant font-light">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between lg:hidden">
      <Link href="/" className="flex items-center gap-3">
            <Image src="/logo/sunrise-yogis-logo-black.png" alt="Logo Left" width={250} height={250} />
            {/* <div className="text-l tracking-wide">SUNRISE YOGIS</div>
            <Image src="/try-sun.png" alt="Logo Right" width={60} height={60} /> */}
          </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden lg:flex items-center justify-between h-full">
        {/* LEFT (Logo) */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo/sunrise-yogis-logo-black.png"  alt="Logo Left" width={250} height={250} />
            {/* <div className="text-l tracking-wide">SUNRISE YOGIS</div>
            <Image src="/try-sun.png" alt="Logo Right" width={60} height={60} /> */}
          </Link>
        </div>
        

        {/* CENTER (Links) */}
        <div className="hidden lg:flex px-5 gap-4 flex-grow justify-center"> {/* Centered navigation links */}
          <Link href="/">Начало</Link>
          <Link href="/">Пазарувай</Link>
          <Link href="/">Намаления</Link>
          <Link href="/">За нас</Link>
          <Link href="/">Контакти</Link>
        </div>

        {/* RIGHT (SearchBar & Icons) */}
        <div className="flex items-center gap-8 ml-auto"> {/* ml-auto ensures right alignment */}
          <SearchBar />
          <NavIcons />
        </div>
        </div>
      
    </div>
  );
};

export default Navbar;



