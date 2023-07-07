import { motion } from 'framer-motion';

import './index.css'

const Modal = ({ isOpen, onClose, children }) => {
  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal_overlay" onClick={handleCloseModal}>
      <motion.div 
        className="modal_content"
        initial = {{scale:0}}
        animate = {{scale:1}}
      >
        <button className="modal_close" onClick={onClose}>
          X
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
