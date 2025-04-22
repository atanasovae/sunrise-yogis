import Image from "next/image";
import Link from "next/link";
import "../../src/styles/styles.scss";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/yoga-mat-2.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 trsansition-opacity easy duration-500"
          />
          <Image src="/yoga-card.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-0" />
        </div>
        <div className="flex justify-between gap-6">
          <h2 className="font-semi-bold product-heading">Постелка Sunrise Yogis</h2>
          <h3 className="font-semi-bold product-heading">120лв</h3>
        </div>
        <div className="text-sm text-gray-500 product-description">
          Удобна, неплъзгаща се постелка, подходяща за всички нива йогисти.
        </div>
        <button className="ring-1 ring-gray-500 py-2 px-4 text-white text-xs bg-moss hover:bg-cream hover:text-black">
          Добави в количката
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/yoga-mat-2.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 trsansition-opacity easy duration-500"
          />
          <Image src="/yoga-card.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-0" />
        </div>
        <div className="flex justify-between gap-6">
          <h2 className="font-semi-bold product-heading">Постелка Sunrise Yogis</h2>
          <h3 className="font-semi-bold product-heading">120лв</h3>
        </div>
        <div className="text-sm text-gray-500 product-description">
          Удобна, неплъзгаща се постелка, подходяща за всички нива йогисти.
        </div>
        <button className="ring-1 ring-gray-500 py-2 px-4 text-white text-xs bg-moss hover:bg-cream hover:text-black">
          Добави в количката
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/yoga-mat-2.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 trsansition-opacity easy duration-500"
          />
          <Image src="/yoga-card.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-0" />
        </div>
        <div className="flex justify-between gap-6">
          <h2 className="font-semi-bold product-heading">Постелка Sunrise Yogis</h2>
          <h3 className="font-semi-bold product-heading">120лв</h3>
        </div>
        <div className="text-sm text-gray-500 product-description">
          Удобна, неплъзгаща се постелка, подходяща за всички нива йогисти.
        </div>
        <button className="ring-1 ring-gray-500 py-2 px-4 text-white text-xs bg-moss hover:bg-cream hover:text-black">
          Добави в количката
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/yoga-mat-2.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 trsansition-opacity easy duration-500"
          />
          <Image src="/yoga-card.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-0" />
        </div>
        <div className="flex justify-between gap-6">
          <h2 className="font-semi-bold product-heading">Постелка Sunrise Yogis</h2>
          <h3 className="font-semi-bold product-heading">120лв</h3>
        </div>
        <div className="text-sm text-gray-500 product-description">
          Удобна, неплъзгаща се постелка, подходяща за всички нива йогисти.
        </div>
        <button className="ring-1 ring-gray-500 py-2 px-4 text-white text-xs bg-moss hover:bg-cream hover:text-black">
          Добави в количката
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
