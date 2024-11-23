import React from "react";

const TextCard = ({
  title,
  value,
  description,
  navLink,
  className,
  increase,
}) => {
  return (
    <div
      className={`bg-white p-4 shadow-md rounded-md flex flex-col gap-2 ${className}`}
    >
      <h1 className="text-[20px] font-semibold ">{title}</h1>
      <h2 className="font-medium text-[48px] flex items-center gap-2">
        {value}{" "}
        <span>
          {increase && (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.6667 9.33334L9.33334 22.6667M22.6667 9.33334H10.6667M22.6667 9.33334V21.3333"
                stroke="#25CD25"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </span>
      </h2>
      <p className="font-normal text-[14px]">{description}</p>
      <a
        href="/"
        className="text-dark_orange text-[14px] mt-16 flex items-center gap-2"
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

export default TextCard;
