"use client";

import * as React from "react";
import { CartContext } from "../context/CartContext";

import Image from "next/image";
import trash from "../../public/images/icon-delete.svg";

const Cart = () => {
  const { cart, total, removeFromCart } = React.useContext(
    CartContext
  ) as CartDiv;
  return (
    <div className="w-full h-[400px] max-h-[400px] desktop:h-[250px] desktop:max-h-[300px] bg-mainwhite rounded-xl overflow-y-auto">
      <p className="text-verydarkblue px-3 pt-3 pb-5 font-bold border-b border-grayishblue">
        Cart
      </p>
      {cart.length >= 1 ? (
        <>
          {cart.map((item, index) => (
            <div key={index} className="px-5 mt-7">
              <div key={index} className="flex flex-col gap-y-3">
                <div className="flex flex-row items-center justify-between">
                  <div className="w-14 h-14 rounded-lg overflow-hidden">
                    <Image src={item.stats.images[0].smallImage} alt="image" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-grayishblue">{item.stats.title}</p>
                    <div className="flex flex-row gap-x-4">
                      <p className="text-grayishblue">
                        $<span>{item.stats.price}</span> x{" "}
                        <span>{item.amount}</span>
                      </p>
                      <p className="text-verydarkblue font-bold">${total}</p>
                    </div>
                  </div>
                  <div onClick={() => removeFromCart(item.id)}>
                    <Image src={trash} alt="image" />
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <button className="w-full py-3 rounded-xl text-mainwhite font-bold text-center bg-mainorange">
                  Checkout
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex justify-center items-center h-4/6">
          <p className="text-grayishblue font-bold">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
