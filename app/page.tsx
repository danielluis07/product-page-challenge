"use client";

import { useState } from "react";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

import useModal from "./hooks/useModal";

import product1 from "../public/images/image-product-1.jpg";
import product2 from "../public/images/image-product-2.jpg";
import product3 from "../public/images/image-product-3.jpg";
import product4 from "../public/images/image-product-4.jpg";
import miniproduct1 from "../public/images/image-product-1-thumbnail.jpg";
import miniproduct2 from "../public/images/image-product-2-thumbnail.jpg";
import miniproduct3 from "../public/images/image-product-3-thumbnail.jpg";
import miniproduct4 from "../public/images/image-product-4-thumbnail.jpg";

import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

import plus from "../public/images/icon-plus.svg";
import minus from "../public/images/icon-minus.svg";

import Image from "next/image";

import { BsCart3 } from "react-icons/bs";
import MiniBox from "./components/MiniBox";
import BigBox from "./components/BigBox";

const data = [
  {
    id: 1,
    stats: {
      images: [
        {
          bigImage: product1,
          smallImage: miniproduct1,
        },
        {
          bigImage: product2,
          smallImage: miniproduct2,
        },
        {
          bigImage: product3,
          smallImage: miniproduct3,
        },
        {
          bigImage: product4,
          smallImage: miniproduct4,
        },
      ],
      title: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: 125,
    },
  },
];

export default function Home() {
  const {
    addToCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    setItemQuantity,
    itemsAmount,
    handleInput,
    handleSelect,
  } = useContext(CartContext) as AddToCart;
  const [currentIndex, setCurrentIndex] = useState(0);

  const modal = useModal();

  const handleDecrease = () => {
    decreaseItemQuantity(data[0].id);
  };

  const handleIncrease = () => {
    increaseItemQuantity(data[0].id);
  };

  const handleQuantityChange = (event: any) => {
    const newQuantity = parseInt(event.target.value, 10);
    setItemQuantity(data[0].id, newQuantity);
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data[0].stats.images.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <>
      <div className="w-full desktop:max-w-[1200px] mx-auto">
        <div className="w-full flex flex-col desktop:flex-row pb-14 gap-x-28">
          <div className="w-full desktop:w-[580px]">
            <div
              onClick={modal.onOpen}
              className="w-full relative desktop:w-[400px] desktop:rounded-xl overflow-hidden">
              <BigBox image={data[0].stats.images[currentIndex].bigImage} />
              <div className="absolute inset-5 flex items-center justify-between desktop:hidden">
                <div
                  onClick={handlePrevious}
                  className="p-4 rounded-full bg-mainwhite text-mainorange">
                  <MdNavigateBefore className="text-mainorange text-2xl" />
                </div>
                <div
                  onClick={handleNext}
                  className="p-4 rounded-full bg-mainwhite">
                  <MdNavigateNext className="text-mainorange text-2xl" />
                </div>
              </div>
            </div>
            <div className="hidden desktop:flex justify-between items-center mt-8">
              {data[0].stats.images.map((item, index) => (
                <div key={index}>
                  <MiniBox
                    image={item.smallImage}
                    onClick={() => handleImageClick(index)}
                    selected={currentIndex === index}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full desktop:flex desktop:items-center px-8 pt-8 desktop:px-0 desktop:pt-0 desktop:mr-32">
            <div>
              <p className="text-mainorange font-bold">SNEAKER COMPANY</p>
              <h1 className="text-3xl text-verydarkblue font-bold mt-5">
                {data[0].stats.title}
              </h1>
              <p className="text-grayishblue mt-5">
                {data[0].stats.description}
              </p>
              <div className="flex flex-row items-center justify-between mt-8 desktop:flex-col desktop:gap-y-2 desktop:items-start">
                <div className="flex flex-row items-center gap-x-4">
                  <h3 className="text-3xl text-verydarkblue font-bold">
                    R$ {data[0].stats.price}
                  </h3>
                  <p className="py-1 px-2 bg-paleorange text-mainorange font-bold w-min rounded-md">
                    50%
                  </p>
                </div>
                <p className="text-grayishblue font-bold line-through">
                  $250.00
                </p>
              </div>
              <div className="flex flex-col desktop:flex-row gap-x-10 desktop:items-center">
                <div className="w-full desktop:w-72 mt-8 mb-5 desktop:mb-0 relative h-16 desktop:h-14">
                  <div
                    onClick={handleDecrease}
                    className="absolute top-1/2 left-5 -translate-y-1/2">
                    <Image src={minus} alt="image" />
                  </div>
                  <div
                    onClick={() => addToCart(data, data[0].id)}
                    className="absolute top-1/2 right-5 -translate-y-1/2">
                    <Image src={plus} alt="image" />
                  </div>
                  <input
                    type="text"
                    className="w-full h-full rounded-md bg-lightgrayishblue text-center font-bold text-verydarkblue outline-none"
                    onChange={(e) => handleInput(e, data[0].id)}
                    value={itemsAmount}
                  />
                </div>
                <div
                  onClick={() => addToCart(data, data[0].id)}
                  className="flex flex-row items-center justify-center gap-x-3 w-full h-16 desktop:mt-8 desktop:h-14 rounded-lg bg-mainorange shadow-xl shadow-orange-200 hover:opacity-75">
                  <div>
                    <BsCart3 className="text-mainwhite font-bold" />
                  </div>
                  <p className="text-mainwhite font-bold">Add to cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
