import Modal from "components/overlays/Modal";
import { useEffect } from "react";

interface IModalItem {
  content: JSX.Element;
  onClose: () => void;
}

const ModalItem = ({ content, onClose }: IModalItem) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Modal onClose={onClose}>
      <>{content}</>
    </Modal>
  );
};

export default ModalItem;
