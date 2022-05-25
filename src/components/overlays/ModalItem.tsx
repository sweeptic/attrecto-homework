import Modal from "components/overlays/Modal";
import { useDisableBodyScroll } from "hooks/useDisableBodyScroll";

interface IModalItem {
  content: JSX.Element;
  onClose: () => void;
}

const ModalItem = ({ content, onClose }: IModalItem) => {
  useDisableBodyScroll();

  return (
    <Modal onClose={onClose}>
      <>{content}</>
    </Modal>
  );
};

export default ModalItem;
