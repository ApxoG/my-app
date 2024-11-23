import React from "react";
import P from "../../components/Text/P";
import Pill from "../../components/Pill";
import FallbackImage from "./FallbackImage";

const index = ({ img, name, isAdmin, description }) => {
  return (
    <div className="flex items-center gap-3">
      <FallbackImage img={img} name={name} />
      <div className="flex flex-col">
        <P content={name} />
        {isAdmin && <Pill content="Admin" />}
        <P content={description} className="text-[12px]" />
      </div>
    </div>
  );
};

export default index;
