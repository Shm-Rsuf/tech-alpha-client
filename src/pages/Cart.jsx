import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { currencyFormatter } from "../utilites/currencyFormatter";

const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
  {
    id: 3,
    name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    description:
      "Witness millions of shades of color through powerful Dynamic Crystal technology",
    price: 497.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    category: "TV",
  },
];

const Cart = () => {
  const [count, setCount] = useState(1);

  const handleDecress = () => {
    setCount((prev) => prev - 1);
  };
  const handleIncress = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="cart-section container mx-auto py-5">
      <h2 className="cart-headline uppercase font-bold text-xl text-center mb-5 space-font">
        your cart
      </h2>
      <div className="cart-container">
        <div className="product-headlines grid grid-cols-5 gap-10 border-b uppercase pb-3">
          <div className="col-product col-span-2">product</div>
          <div className="col-unit-price">unit price</div>
          <div className="col-quantity">quantity</div>
          <div className="col-total-price ml-auto">total price</div>
        </div>
        <div className="products flex flex-col">
          {data.map((product) => (
            <div className="product grid grid-cols-5 gap-10 border-b-2 pb-5 mt-5">
              <div className="left flex col-span-2 gap-5">
                <img
                  className="w-32 h-32 object-cover"
                  src={product.image}
                  alt={product.name}
                />
                <div className="details flex flex-col items-start gap-3">
                  <span>{product.name}</span>
                  <button className="text-gray-400 hover:text-rose-500 duration-500">
                    remove
                  </button>
                </div>
              </div>
              <div className="unit-price">
                {currencyFormatter(product.price)}
              </div>
              <div
                className="counter
              flex"
              >
                <button
                  onClick={() => handleDecress()}
                  className="w-10 h-10 bg-gray-100 border border-gray-300 flex justify-center items-center active:bg-gray-700 active:text-gray-50 font-semibold"
                >
                  -
                </button>
                <span className="w-10 h-10 bg-gray-100 border border-gray-300 flex justify-center items-center">
                  {count}
                </span>
                <button
                  onClick={() => handleIncress()}
                  className="w-10 h-10 bg-gray-100 border border-gray-300 flex justify-center items-center active:bg-gray-700 active:text-gray-50 font-semibold"
                >
                  +
                </button>
              </div>
              <div className="total-price ml-auto">
                {currencyFormatter(product.price)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-lower flex justify-between items-start py-5">
        <button className="clear-cart uppercase border py-2 px-4 hover:bg-red-300 hover:text-rose-600 hover:border-red-300 duration-500 font-medium">
          clear cart
        </button>
        <div className="flex flex-col items-start gap-2">
          <div className="top flex justify-between items-center w-full text-xl font-medium">
            <span className=" capitalize text-sky-500 ">subtotal</span>
            <span className=" text-rose-500">$700</span>
          </div>
          <p className="text-gray-400">
            Taxes and shipping costs are calculated at the checkout
          </p>
          <button className="checkout bg-slate-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-500">
            checkout
          </button>
          <button className="continue flex justify-center items-center gap-1 uppercase text-sky-500 font-medium tracking-tighter hover:-translate-x-1 duration-300">
            <BsArrowLeft />
            <span>continue shopping</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
