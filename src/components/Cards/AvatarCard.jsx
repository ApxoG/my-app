import React from "react";
import Avatar from "../Avatar/index";
const AvatarCard = ({ className, title, navLink, description }) => {
  return (
    <div
      className={`bg-white p-4 shadow-md rounded-md flex flex-col gap-2 ${className}`}
    >
      <h1 className="text-[20px] font-semibold">{title}</h1>
      <div className="flex flex-col gap-4">
        {description.map((item, index) => (
          <Avatar
            img={item.img}
            name={item.name}
            description={item.description}
            key={index}
          />
        ))}
      </div>
      <a
        href="/"
        className="text-dark_orange text-[14px] mt-16 flex gap-2 items-center"
      >
        {navLink}{" "}
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
            stroke="#734A00"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default AvatarCard;
