import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import { FiTrash2 } from "react-icons/fi";

const CartItem = ({ item }) => {
  const { removeFromCart, addToCart, decreaseCart } = useContext(CartContext);
  // destructure item
  const { _id, primaryImage, productName, price, quantity } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-5 lg:py-3 border-b border-green-200 pr-6 pl-2">
      <div className="div1 min-h-[150px] w-full flex items-center gap-x-4">
        <Link to={`/product/${_id}`}>
          {/* image */}
          <img
            src={"http://localhost:3000" + primaryImage.path.split("server")[1]}
            className="max-w-[45px] rounded-lg"
            alt=""
          />
        </Link>

        {/* product name and remove icon */}
        <div className="div2 w-full flex flex-col mb-2">
          <div className=" flex items-center justify-between ">
            <Link
              to={`/product/${_id}`}
              className="uppercase font-semibold text-sm max-w-[240px] hover:underline pb-2"
            >
              {productName}
            </Link>
            {/* remive icon */}
            <div
              onClick={() => {
                removeFromCart(_id);
              }}
              className="text-xl cursor-pointer"
            >
              <FiTrash2 className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2  h-[36px] text-sm ">
            {/* qty */}
            <div className="flex max-w-[80px]  items-center h-full flex-1 border font-medium text-primary justify-between">
              {/* minus icon */}
              <div
                onClick={() => {
                  decreaseCart(_id);
                }}
                className="flex flex-1 h-full justify-center items-center "
              >
                <IoMdRemove />
              </div>
              {/* quantity */}
              <div className="px-3 flex h-full  items-center">
                {" "}
                <span>{quantity}</span>
              </div>
              {/* plus icon */}
              <div
                onClick={() => {
                  addToCart(item);
                }}
                className="flex flex-1 h-full justify-center items-center"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex flex-1 justify-around items-center font-medium text-gray-400">
              ₹ {price}
            </div>
            {/* final price */}
            <div className="flex flex-1 justify-end items-center font-bold">
              ₹{`${parseFloat(price * quantity).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
