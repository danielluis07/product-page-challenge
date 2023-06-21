"use client";

import Image, { StaticImageData } from "next/image";

interface BigBoxProps {
  image: StaticImageData;
}

const BigBox: React.FC<BigBoxProps> = ({ image }) => {
  return <Image src={image} alt="image" />;
};

export default BigBox;
