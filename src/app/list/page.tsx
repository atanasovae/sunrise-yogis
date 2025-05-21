// import ProductList from "@/components/ProductList";
// import Image from "next/image";
// import { Suspense } from "react";
// import Filter from "@/components/Filter";

// const ListPage = async () => {

//   return (
//     <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
//       {/* CAMPAIGN */}
//       <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64 mt-6">
//         <div className="w-2/3 flex flex-col items-center justify-center gap-8 ">
//           <h1 className=" text-center text-4xl font-semibold leading-[48px] text-gray-700">
//             Получи 50% Отстъпка на
//             <br /> Избрани Продукти
//           </h1>
//           <button className="ring-1 ring-gray-500 py-2 px-4 text-white text-xs bg-moss hover:bg-cream hover:text-black">
//             Купи Сега
//           </button>
//         </div>
//         <div className="relative w-1/3">
//           <Image src="/mat-transparent.png" alt="" fill className="object-contain" />
//         </div>
//       </div>
//       {/* FILTER */}
//       <Filter />
//       {/* PRODUCTS */}
//       <h1 className="mt-12 text-xl font-semibold"> Постелки за теб</h1>
//       {/* <Suspense fallback={<Skeleton/>}> */}
//         <ProductList
//           // categoryId={
//           //   cat.collection?._id || "00000000-000000-000000-000000000001"
//           // }
//           // searchParams={searchParams}
//         />
//       {/* </Suspense> */}
//     </div>
//   );
// };

// export default ListPage;

import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className=" text-center text-4xl font-semibold leading-[48px] text-gray-700">
            Получи 50% Отстъпка на
            <br /> Избрани Продукти
          </h1>
          <button className="ring-1 ring-gray-500 py-2 px-4 text-white text-xs bg-moss hover:bg-cream hover:text-black">
            Купи Сега
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/mat-transparent.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">
        {cat?.collection?.name} For You!
      </h1>
      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
