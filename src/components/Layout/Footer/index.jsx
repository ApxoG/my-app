import React from "react";
import Avatar from "../../Avatar";
import { FOOTERNAV } from "../../../util/footernav";
import P from "../../Text/P";

const index = () => {
  console.log(FOOTERNAV);
  return (
    <div className="px-5 flex flex-col gap-4">
      <Avatar
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwzhli3UiGlUsTtOAoxA_f4dKRDG9DGa99w&s"
        }
        name="John Doe"
        isAdmin={true}
        description={null}
      />
      <ul>
        {FOOTERNAV.map((item, index) => (
          <li key={index} className="flex py-3 items-center gap-4 capitalize">
            {item.icon}
            <P content={item.label} className={item?.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
