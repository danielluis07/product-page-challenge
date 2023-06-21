"use client";

import Image, { StaticImageData } from "next/image";

interface MiniBoxProps {
  image: StaticImageData;
  selected?: boolean;
  onClick: () => void;
}

const MiniBox: React.FC<MiniBoxProps> = ({ image, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[80px] rounded-xl overflow-hidden ${
        selected && "border-[3px] border-mainorange"
      }`}>
      <Image
        src={image}
        alt="image"
        className={`${selected && "opacity-40"}`}
      />
    </div>
  );
};

export default MiniBox;
