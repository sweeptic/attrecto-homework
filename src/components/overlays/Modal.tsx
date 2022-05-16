import { createPortal } from "react-dom";

interface IBackdrop {
  onClose: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Backdrop = ({ onClose }: IBackdrop) => {
  return <div className={"backdrop"} onClick={onClose} />;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ModalOverlay = (props: any) => {
  return (
    <div /*className={classes.modal}*/>
      <div /*className={classes.content}*/>{props.children}</div>
    </div>
  );
};

interface IModal {
  onClose: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const portalElement = document.getElementById("overlays")!;

const Modal = (props: any) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
