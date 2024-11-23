import React from "react";
import { NAVIGATION } from "../../../util/navigation";
import P from "../../Text/P";

const index = () => {
  return (
    <div>
      <nav>
        <ul>
          {NAVIGATION?.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 py-3 px-5 capitalize"
            >
              {item.icon} <P content={item.label} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default index;
