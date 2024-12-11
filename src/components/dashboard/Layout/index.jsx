import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

const index = () => {
  return (
    <div className="bg-white rounded-xl h-[97vh] w-[280px] px-2">
      <div className="flex flex-col h-full justify-between">
        <div>
          <Header />
          <Navigation />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
