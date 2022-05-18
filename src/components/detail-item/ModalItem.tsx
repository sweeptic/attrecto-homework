import Modal from "components/overlays/Modal";

interface IModalItem {
  content: JSX.Element;
  onClose: () => void;
}

const ModalItem = (props: any) => {
  return (
    <Modal onClose={props.onClose}>
      <div>{props.content}</div>
    </Modal>
  );
};

export default ModalItem;
