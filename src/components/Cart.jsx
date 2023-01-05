import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../utilites/currencyFormatter";

const Cart = ({ product }) => {
  const navigate = useNavigate();
  const addToCartHandler = (id) => {
    console.log(id);
    navigate("/cart");
  };

  return (
    <div className="product flex flex-col gap-2 bg-white shadow-md  rounded-lg overflow-hidden hover:shadow-2xl duration-500">
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="texts flex flex-col gap-2 px-5 pb-5">
        <span className="category-tag uppercase text-xs font-bold text-teal-500">
          {product.category}
        </span>
        <h3 className="title font-medium h-[4.5rem]">{product.name}</h3>
        <p className="details text-sm text-gray-500 h-[5.2rem]">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="price font-medium text-rose-500">
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCartHandler(product.id)}
            className="uppercase font-medium bg-violet-500 text-violet-50 py-2 px-4 rounded-md hover:text-orange-50 hover:bg-orange-500 duration-500"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
