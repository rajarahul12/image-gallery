import React from "react";
import { motion } from "framer-motion";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <a
        target="__blank"
        className="image__download"
        href={selectedImg}
        download
      >
        <motion.p initial={{ y: "-100vh" }} animate={{ y: 0 }}>
          Download
        </motion.p>
      </a>
    </motion.div>
  );
};

export default Modal;
