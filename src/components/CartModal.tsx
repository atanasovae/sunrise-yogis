import React from "react";
import Image from "next/image";

function CartModal() {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-cream text-black top-14 right-0 font-cormorant flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Количката е празна</div>
      ) : (
        <div className="flex gap-4">
          <Image
            src="/yoga-mat-2.png"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded"
          />
          <div className="">
            {/* TOP */}
            <div className="">
              <div className="flex items-center justify-between gap-8">
                {/* TITLE */}
                <h3 className="font-cormorant font-semibold text-moss">Постелка</h3>
                <div className="font-cormorant p-1">20лв</div>
              </div>
            </div>
            <div className="font-cormorant text-sm text-gray-500">{/* DESCRIPTION */}В наличност</div>

            {/* BOTTOM */}

            <div className="flex justify-between text-sm">
              <span className="text-gray-500"> Кол. 2</span>
              <span className="text-moss">Премахни</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartModal;
