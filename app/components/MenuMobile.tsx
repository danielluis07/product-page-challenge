"use client";

import Image from "next/image";
import close from "../../public/images/icon-close.svg";

interface MenuMobileProps {
  onClose: () => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ onClose }) => {
  return (
    <div className="w-full h-full bg-neutral-800/70">
      <div className="w-4/6 h-full bg-mainwhite p-8">
        <div onClick={onClose}>
          <Image src={close} alt="image" />
        </div>
        <div className="mt-12 flex flex-col gap-y-8">
          <p className="text-verydarkblue font-bold">Collections</p>
          <p className="text-verydarkblue font-bold">Men</p>
          <p className="text-verydarkblue font-bold">Women</p>
          <p className="text-verydarkblue font-bold">About</p>
          <p className="text-verydarkblue font-bold">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
