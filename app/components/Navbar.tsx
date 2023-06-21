"use client";

import { useState } from "react";
import * as React from "react";
import { CartContext } from "../context/CartContext";

import Image from "next/image";
import logo from "../../public/images/logo.svg";
import iconcart from "../../public/images/icon-cart.svg";
import avatar from "../../public/images/image-avatar.png";
import menu from "../../public/images/icon-menu.svg";
import MenuMobile from "./MenuMobile";
import Cart from "./Cart";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, setIsOpen, itemsAmount } = React.useContext(
    CartContext
  ) as CartIconProps;
  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="px-10 w-full desktop:w-5/6 mx-auto flex items-center desktop:border-b desktop:border-grayishblue desktop:pb-8">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row gap-x-4">
            <div
              onClick={() => setIsMenuOpen(true)}
              className="flex desktop:hidden">
              <Image src={menu} alt="image" />
            </div>
            <div
              className={`${
                isMenuOpen ? "left-0" : "-left-full"
              } fixed inset-y-0 z-30 w-full h-full`}>
              <MenuMobile onClose={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
            <div>
              <Image src={logo} alt="image" />
            </div>
          </div>
          <p className="hidden desktop:flex">Collections</p>
          <p className="hidden desktop:flex">Men</p>
          <p className="hidden desktop:flex">Women</p>
          <p className="hidden desktop:flex">About</p>
          <p className="hidden desktop:flex">Contact</p>
        </div>
        <div className="w-full flex flex-row justify-end gap-x-8 items-center">
          <div onClick={() => setIsOpen(!isOpen)} className="relative">
            <div className="absolute right-0 bottom-1/2 flex justify-center items-center w-3 h-3 rounded-full text-mainwhite bg-mainorange text-[8px]">
              {itemsAmount}
            </div>
            <Image src={iconcart} alt="image" />
          </div>
          <div
            className={`${
              isOpen ? "inset-y-28 desktop:inset-y-24" : "-top-full"
            } absolute inset-x-3 desktop:h-min shadow-xl rounded-xl desktop:inset-x-auto z-10 desktop:w-[400px] desktop:right-20 transition-all duration-200`}>
            <Cart />
          </div>
          <div className="w-10 h-10 rounded-full border-[3px] hover:border-mainorange">
            <Image src={avatar} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
