import React from "react";

const P = ({ content, className }) => {
  return <p className={className + " " + "text-sm text-gray-600"}>{content}</p>;
};

export default P;
