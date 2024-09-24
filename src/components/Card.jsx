import React from "react";

const Card = ({ children, bg = "bg-gray-100" }) => {
  // added template literals and bg prop for reusing in different cases
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
