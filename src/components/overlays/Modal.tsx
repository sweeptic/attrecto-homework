import { createPortal } from "react-dom";

interface IBackdrop {
  onClose: () => void;
}

const Backdrop = ({ onClose }: IBackdrop) => {
  return <div className="backdrop" onClick={onClose} />;
};

interface ModalOverlay {
  children?: React.ReactNode;
  onClose: () => void;
}

const ModalOverlay = (props: ModalOverlay) => {
  return (
    <div className="modal" onClick={props.onClose}>
      <div /*className={classes.content}*/>{props.children}</div>
    </div>
  );
};

interface IModal {
  onClose: () => void;
  children?: React.ReactNode;
}

const portalElement = document.getElementById("overlays");

const Modal = (props: IModal) => {
  return (
    <>
      {/* {portalElement ? createPortal(<Backdrop onClose={props.onClose} />, portalElement) : null} */}
      {portalElement ? createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>, portalElement) : null}
    </>
  );
};

export default Modal;
