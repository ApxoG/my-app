import React from "react";
import Logo from "../../Icon/Logo";
const index = () => {
  return (
    <div className="px-6 py-3">
      <Logo />
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border border-ligt_gray rounded-full pl-4 p-1  mt-5 w-full"
        />
      </div>
    </div>
  );
};

export default index;
