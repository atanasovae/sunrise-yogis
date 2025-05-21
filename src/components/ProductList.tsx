// import Image from "next/image";
// import Link from "next/link";
// import "../../src/styles/styles.scss";
// import { wixClientServer } from "@/lib/wixClientServer";
// import { products } from "@wix/stores";

// const PRODUCT_PER_PAGE = 20;

// const ProductList = async ({
//   categoryId,
//   limit,
// }: {
//   categoryId: string;
//   limit?: number;
// }) => {
//   const wixClient = await wixClientServer();

//   const res = await wixClient.products
//     .queryProducts()
//     .eq("collectionIds", [categoryId])
//     .limit(limit || PRODUCT_PER_PAGE)
//     .find();

//   return (
//     <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
//       {res.items.map((product: products.Product) => (
//       <Link
//         href="/test"
//         className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
//         key={product._id}
//       >
//         <div className="relative w-full h-80">
//           <Image
//             src="/yoga-mat-2.png"
//             alt=""
//             fill
//             sizes="25vw"
//             className="absolute object-cover rounded-md z-10 hover:opacity-0 trsansition-opacity easy duration-500"
//           />
//           <Image
//             src="/yoga-card.jpg"
//             alt=""
//             fill
//             sizes="25vw"
//             className="absolute object-cover rounded-md z-0"
//           />
//         </div>
//         <div className="flex justify-between gap-6">
//           <h2 className="font-semi-bold product-heading">
//             Постелка Sunrise Yogis
//           </h2>
//           <h3 className="font-semi-bold product-heading">120лв</h3>
//         </div>
//         <div className="text-sm text-gray-500 product-description">
//           Удобна, неплъзгаща се постелка, подходяща за всички нива йогисти.
//         </div>
//         <button className="ring-1 ring-gray-500 py-2 px-4 text-white text-xs bg-moss hover:bg-cream hover:text-black">
//           Добави в количката
//         </button>
//       </Link>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

// import Image from "next/image";
// import Link from "next/link";
// import "../../src/styles/styles.scss";
// import { wixClientServer } from "@/lib/wixClientServer";
// import { products } from "@wix/stores";
// import DOMPurify from "isomorphic-dompurify";

// const PRODUCT_PER_PAGE = 20;

// const ProductList = async ({
//   categoryId,
//   limit,
// }: {
//   categoryId: string;
//   limit?: number;
// }) => {
//   try {
//     const wixClient = await wixClientServer();

//     const res = await wixClient.products
//       .queryProducts()
//       .eq("collectionIds", [categoryId])
//       .limit(limit || PRODUCT_PER_PAGE)
//       .find();

//     console.log(res.items[0].priceData?.formatted?.price);
//     // console.log(res.items[0])

//     return (
//       <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
//         {res.items.map((product: products.Product) => (
//           <Link
//             href={"/" + product.slug}
//             className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
//             key={product._id}
//           >
//             <div className="relative w-full h-80">
//               <Image
//                 src={product.media?.mainMedia?.image?.url || "/product.png"}
//                 alt=""
//                 fill
//                 sizes="25vw"
//                 className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
//               />
//               {product.media?.items && (
//                 <Image
//                   src={product.media?.items[1]?.image?.url || "/product.png"}
//                   alt=""
//                   fill
//                   sizes="25vw"
//                   className="absolute object-cover rounded-md"
//                 />
//               )}
//             </div>
//             <div className="flex justify-between gap-6">
//               <h2 className="font-semi-bold product-heading">{product.name}</h2>
//               <h3 className="font-semi-bold product-heading">
//                 {product.priceData?.price}лв
//               </h3>
//             </div>
//             {product.additionalInfoSections && (
//             <div
//               className="text-sm text-gray-500"
//               dangerouslySetInnerHTML={{
//                 __html: DOMPurify.sanitize(
//                   product.additionalInfoSections.find(
//                     (section: any) => section.title === "shortDesc"
//                   )?.description || ""
//                 ),
//               }}
//             ></div>
//           )}
//             <button className="ring-1 ring-gray-500 py-2 px-4 text-white text-xs bg-moss hover:bg-cream hover:text-black">
//               Добави в количката
//             </button>
//           </Link>
//         ))}
//       </div>
//     );
//   } catch (error) {
//     console.error("Failed to load products:", error);
//     return (
//       <div className="text-red-500 text-center mt-8">
//         Неуспешно зареждане на продуктите. Моля, опитайте отново по-късно.
//       </div>
//     );
//   }
// };

// export default ProductList;

import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );
  // .find();

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">{product.price?.price} лв</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Добави в количката
          </button>
        </Link>
      ))}
      {searchParams?.cat || searchParams?.name ? (
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />
      ) : null}
    </div>
  );
};

export default ProductList;