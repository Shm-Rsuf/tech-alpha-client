import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getSubtotal,
  removeFromCart,
} from "../features/products/cartSlice";
import { currencyFormatter } from "../utilites/currencyFormatter";

const Cart = () => {
  const { cartItems: data, cartTotalAmount: subtotal } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const decreaseHandler = (product) => {
    dispatch(decreaseCart(product));
  };

  const increaseHandler = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getSubtotal());
  }, [data, dispatch]);

  return (
    <div className="cart-section container mx-auto py-5">
      <h2 className="cart-headline uppercase font-bold text-xl text-center mb-5 space-font">
        {data.length > 0
          ? `You've added ${data.length} item${data.length > 1 ? "s" : ""}`
          : "Your cart is empty"}
      </h2>
      {data.length === 0 && (
        <div className="bg-violet-700 text-violet-100 flex justify-center items-center w-40 mx-auto py-2 border border-rose-500 capitalize font-semibold active:bg-orange-700 active:text-orange-100 duration-300">
          <Link to="/products">shopping now</Link>
        </div>
      )}
      {data.length > 0 && (
        <>
          <div className="cart-container">
            <div className="product-headlines grid grid-cols-5 gap-10 border-b uppercase pb-3">
              <div className="col-product col-span-2">product</div>
              <div className="col-unit-price">unit price</div>
              <div className="col-quantity">quantity</div>
              <div className="col-total-price ml-auto">total price</div>
            </div>
            <div className="products flex flex-col">
              {data.map((product) => (
                <div
                  key={product._id}
                  className="product grid grid-cols-5 gap-10 border-b-2 pb-5 mt-5"
                >
                  <div className="left flex col-span-2 gap-5">
                    <img
                      className="w-32 h-32 object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="details flex flex-col items-start gap-3">
                      <span>{product.name}</span>
                      <button
                        onClick={() => handleRemove(product)}
                        className="text-gray-400 hover:text-rose-500 duration-500"
                      >
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
                      onClick={() => decreaseHandler(product)}
                      className="w-10 h-10 bg-gray-100 border border-gray-300 flex justify-center items-center active:bg-gray-700 active:text-gray-50 font-semibold"
                    >
                      -
                    </button>
                    <span className="w-10 h-10 bg-gray-100 border border-gray-300 flex justify-center items-center">
                      {product.cartQuantity}
                    </span>
                    <button
                      onClick={() => increaseHandler(product)}
                      className="w-10 h-10 bg-gray-100 border border-gray-300 flex justify-center items-center active:bg-gray-700 active:text-gray-50 font-semibold"
                    >
                      +
                    </button>
                  </div>
                  <div className="total-price ml-auto">
                    {currencyFormatter(product.price * product.cartQuantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-lower flex justify-between items-start py-5">
            <button
              onClick={() => dispatch(clearCart())}
              className="clear-cart uppercase border py-2 px-4 hover:bg-red-300 hover:text-rose-600 hover:border-red-300 duration-500 font-medium"
            >
              clear cart
            </button>
            <div className="flex flex-col items-start gap-2">
              <div className="top flex justify-between items-center w-full text-xl font-medium">
                <span className=" capitalize text-sky-500 ">subtotal</span>
                <span className=" text-rose-500">
                  {currencyFormatter(subtotal)}
                </span>
              </div>
              <p className="text-gray-400">
                Taxes and shipping costs are calculated at the checkout
              </p>
              <Link className="checkout bg-slate-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-500 text-center">
                checkout
              </Link>
              <Link
                to="/products"
                className="continue flex justify-center items-center gap-1 uppercase text-sky-500 font-medium tracking-tighter hover:-translate-x-1 duration-300"
              >
                <span>
                  <BsArrowLeft />
                </span>
                <span>continue shopping</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
