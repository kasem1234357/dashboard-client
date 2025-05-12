import React, { ReactNode } from "react";
import { motion } from "framer-motion"
import { config_animateY,config_scale } from "../../../configs/motionConfig";

const Modal = ({ children, isOpen, onClose, modalMaxWidth }) => {
  if (!isOpen) return null;

  return (
    <motion.div {...config_scale}
      onClick={() => {
        onClose && onClose();
      }}
      className=" model-box "
    >
      <div
        className={`model-box-item secondary--bg`} style={{
          width: modalMaxWidth ? modalMaxWidth : '400px'
        }}
        onClick={(e) => e.stopPropagation()} // Stop click event propagation
      >
        {React.cloneElement(children , { onClose })}
      </div>
    </motion.div>
  );
};

export default Modal;
