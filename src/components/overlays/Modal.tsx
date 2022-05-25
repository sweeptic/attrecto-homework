import { createPortal } from "react-dom";

interface ModalOverlay {
  children?: React.ReactNode;
  onClose: () => void;
}

const ModalOverlay = (props: ModalOverlay) => {
  return (
    <div className="modal" onClick={props.onClose}>
      <>{props.children}</>
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
      {portalElement ? createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>, portalElement) : null}
    </>
  );
};

export default Modal;
