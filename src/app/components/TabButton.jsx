import { motion } from "framer-motion";
import React from "react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" }
}

const TabButton = ({ active, selectTab, buttonTitle }) => {
  const buttonClasses = active
    ? "text-white"
    : "text-white";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {buttonTitle}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-tertiary mt-1 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
