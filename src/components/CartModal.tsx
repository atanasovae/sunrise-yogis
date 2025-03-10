// import React from "react";
// import Image from "next/image";

// function CartModal() {
//   const cartItems = true;
//   return (
//     <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-cream text-black top-14 right-0 font-cormorant flex flex-col gap-6 z-20">
//       {!cartItems ? (
//         <div className="">Количката е празна</div>
//       ) : (
//         <div className="flex gap-4">
//           <Image
//             src="/yoga-mat-2.png"
//             alt=""
//             width={72}
//             height={96}
//             className="object-cover rounded"
//           />
//           <div className="">
//             {/* TOP */}
//             <div className="">
//               <div className="flex items-center justify-between gap-8">
//                 {/* TITLE */}
//                 <h3 className="font-cormorant font-semibold text-moss">Постелка</h3>
//                 <div className="font-cormorant p-1">20лв</div>
//               </div>
//             </div>
//             <div className="font-cormorant text-sm text-gray-500">{/* DESCRIPTION */}В наличност</div>

//             {/* BOTTOM */}

//             <div className="flex justify-between text-sm">
//               <span className="text-gray-500"> Кол. 2</span>
//               <span className="text-moss">Премахни</span>
//             </div>
//           </div>
//         </div>

        
//       )}
//     </div>
//   );
// }

// export default CartModal;

import React from "react";
import Image from "next/image";

function CartModal() {
  const cartItems = true; // Keeping your original value for cartItems

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-cream text-black top-14 right-0 font-cormorant flex flex-col gap-6 z-20">
      {cartItems ? (
        <>
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


          <div className="">
            <div className="flex items-center justify-between font-semibold ">
              <span className="">Общо</span>
              <span className="">49лв</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Доставката се калкулира при плащане
            </p>
            <div className="flex justify-between text-sm gap-3">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                Виж Количката
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                // disabled={isLoading}
                // onClick={handleCheckout}
              >
                Към плащане
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="">Количката е празна</div>
      )}
    </div>
  );
}

export default CartModal;
