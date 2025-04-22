import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import "../../src/styles/styles.scss";
import CategoryList from "@/components/CategoryList";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-2 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="typography-h1">Нови продукти </h1>
        <ProductList />
      </div>
      <div className="mt-9 bg-white py-4">
        <h1 className="typography-h1 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">Категории</h1>
        <CategoryList />
      </div>
    </div>
  );
};

export default HomePage;
