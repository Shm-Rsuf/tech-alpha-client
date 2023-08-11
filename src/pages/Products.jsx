import { useSelector } from "react-redux";
import Cart from "../components/Cart";

const Products = () => {
  const { items: data, status } = useSelector((state) => state.products);
  console.log("data: ", data);
  return (
    <div className="products-section container mx-auto py-5">
      <h2 className="products-title uppercase font-bold text-xl text-center mb-5 space-font">
        browse all products
      </h2>
      <div className="products-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {status && <p className="col-span-full text-center">{status}</p>}

        {data.map((product) => (
          <Cart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
