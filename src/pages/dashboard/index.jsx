import React from "react";
import Card from "../../components/dashboard/Cards/Card";
import { CARDDATA } from "./../../util/CardData";
import { CUSTOMERSDATA } from "./../../util/CustomersData";
const index = () => {
  return (
    <div className="w-full">
      <div className="flex gap-4 flex-wrap w-full">
        {CARDDATA.map((data, index) => (
          <Card
            key={index}
            className={data.className}
            title={data.title}
            value={data.value}
            description={data.description}
            navLink={data.navLink}
            theme={data.theme}
            increase={data.increase}
          />
        ))}
      </div>
      <div className="flex gap-4 flex-wrap mt-4 w-full">
        <Card
          className="w-[49%]"
          title="Customers"
          value="15%"
          description={CUSTOMERSDATA}
          navLink="All customers"
          theme="avatar"
          increase={true}
        />
      </div>
    </div>
  );
};

export default index;
