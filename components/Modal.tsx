"use client";
import { useModal } from "@/app/context/ModalContext";
export default function Modal() {
  const { isOpen, closeModal, modalContent } = useModal();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <button onClick={closeModal} className="modal-close-btn">
        x
      </button>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        {modalContent}
      </div>
    </div>
  );
}
