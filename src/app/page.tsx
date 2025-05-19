// "use client"

import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import "../../src/styles/styles.scss";
import CategoryList from "@/components/CategoryList";
import { Suspense, useContext, useEffect } from "react";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import Skeleton from "@/components/Skeleton";

const HomePage = async () => {
  //   const wixClient = useWixClient()

  //   useEffect(()=>{
  //   const getProducts = async () => {
  //   const res = await wixClient.products.queryProducts().find();
  //   console.log(res)
  //   }

  //   getProducts();
  // }, [wixClient])

  //   const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  return (
    <div className="">
      <Slider />
      <div className="mt-2 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="typography-h1">Нови продукти </h1>
        <Suspense fallback={<div>Loading...</div>}>
        <ProductList categoryId="3942b31e-fb43-aea9-bde9-672a85b19efc" limit={4}/>
        </Suspense>
      </div>
      <div className="mt-9 bg-white py-4">
        <h1 className="typography-h1 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          Категории
        </h1>
        <Suspense fallback={<Skeleton />}>
        <CategoryList />
        </Suspense>
      </div>
      <div className="mt-2 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="typography-h1">Нови продукти </h1>
        <Suspense fallback={<Skeleton />}>
        <ProductList categoryId="3942b31e-fb43-aea9-bde9-672a85b19efc" limit={4}/>
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
