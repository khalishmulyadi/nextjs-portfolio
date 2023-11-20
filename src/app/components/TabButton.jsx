import React from "react";

const TabButton = ({ active, selectTab, buttonTitle }) => {
  const buttonClasses = active
    ? "text-white border-b-[3px] border-tertiary"
    : "text-white";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {buttonTitle}
      </p>
    </button>
  );
};

export default TabButton;
