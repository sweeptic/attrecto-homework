import Modal from "components/overlays/Modal";

interface IModalItem {
  content: JSX.Element;
  onClose: () => void;
}

const ModalItem = ({ content, onClose }: IModalItem) => {
  return (
    <Modal onClose={onClose}>
      <div>{content}</div>
    </Modal>
  );
};

export default ModalItem;
