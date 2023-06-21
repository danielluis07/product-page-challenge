"use client";

import { useState, useEffect } from "react";

import product1 from "../../public/images/image-product-1.jpg";
import product2 from "../../public/images/image-product-2.jpg";
import product3 from "../../public/images/image-product-3.jpg";
import product4 from "../../public/images/image-product-4.jpg";
import miniproduct1 from "../../public/images/image-product-1-thumbnail.jpg";
import miniproduct2 from "../../public/images/image-product-2-thumbnail.jpg";
import miniproduct3 from "../../public/images/image-product-3-thumbnail.jpg";
import miniproduct4 from "../../public/images/image-product-4-thumbnail.jpg";

import { CgClose } from "react-icons/cg";

import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import BigBox from "./BigBox";
import MiniBox from "./MiniBox";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const data = [
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
];

const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const isAboveLarge = useMediaQuery("(min-width: 1440px)");

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
    onClose();
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <>
      {isModalOpen && isAboveLarge && (
        <div className="flex justify-center items-center bg-neutral-800/70 fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-2/5 h-full mx-auto mt-44">
            <div className="w-[480px] flex justify-end mx-auto">
              <div onClick={handleClose}>
                <CgClose className="text-mainwhite text-2xl mr-4 hover:text-mainorange" />
              </div>
            </div>
            <div className="w-[480px] desktop:rounded-xl overflow-y-hidden mx-auto mt-4 relative">
              <div className="desktop:mx-5 desktop:rounded-xl desktop:overflow-hidden">
                <BigBox image={data[currentIndex].bigImage} />
              </div>
              <div className="absolute inset-0 flex items-center justify-between">
                <div
                  onClick={handlePrevious}
                  className="p-3 rounded-full bg-mainwhite group">
                  <MdNavigateBefore className="text-3xl group-hover:text-mainorange" />
                </div>
                <div
                  onClick={handleNext}
                  className="p-3 rounded-full bg-mainwhite group">
                  <MdNavigateNext className="text-3xl group-hover:text-mainorange" />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-x-8 mt-10">
              {data.map((item, index) => (
                <div key={index}>
                  <MiniBox
                    image={item.smallImage}
                    selected={currentIndex === index}
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
