import Add from "@/components/Add";
import CustomiseProducts from "@/components/CustomiseProducts";
import ProductImages from "@/components/ProductImages";
import Reviews from "@/components/Reviews";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const SinglePage = async ({ params }: { params: { slug: string } }) => {

  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  console.log(product.productOptions)

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 mt-9">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
      <ProductImages items={product.media?.items} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[1px] bg-valleymoss" />
    
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">{product.price?.price} лв</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              {product.price?.price} лв
            </h3>
            <h2 className="font-medium text-2xl">
              {product.price?.discountedPrice} лв
            </h2>
          </div>
        )}

          <div className="h-[1px] bg-valleymoss" />
    <CustomiseProducts/>
    <Add/>
        <div className="h-[2px] bg-valleymos" />
    
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}

        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">Отзиви</h1>
        <Suspense fallback="Loading...">
          {/* <Reviews productId={product._id!} /> */}
        </Suspense>
      </div>
    </div>
  );
};

export default SinglePage;