import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "./index.css";

const Backdrop = ({ onClick }) => (
  <div className="modal_backdrop" onClick={onClick} />
);

const ModalOverlay = ({ onClose, heading, children }) => (
  <motion.div
    className="modal_content"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
  >
    <div className="modal_heading">
      <h3>{heading}</h3>
      <button className="modal_close" onClick={onClose}>
        X
      </button>
    </div>
    {children}
  </motion.div>
);


const Modal = ({ isOpen, onClose, children, heading }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose} heading={heading}>
          {children}
        </ModalOverlay>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
