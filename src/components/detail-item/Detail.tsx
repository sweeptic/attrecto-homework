import Modal from "components/overlays/Modal";

interface IDetail {
  onClose: () => void;
}

const Detail = (props: any) => {
  return (
    <Modal onClose={props.onClose}>
      <div>Detail</div>
    </Modal>
  );
};

export default Detail;
