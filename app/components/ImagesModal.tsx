"use client";

import Modal from "./Modal";
import useModal from "../hooks/useModal";

const ImagesModal = () => {
  const modal = useModal();
  return (
    <>
      <Modal isOpen={modal.isOpen} onClose={modal.onClose} />
    </>
  );
};

export default ImagesModal;
