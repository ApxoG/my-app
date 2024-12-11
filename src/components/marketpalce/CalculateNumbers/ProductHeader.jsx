import React from "react";
import { useState, useEffect } from "react";

const ProductHeader = ({ setFilterValue, setSortValue }) => {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`
        );
        const data = await response.json();
        setFilterData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFilterData([]);
      } finally {
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto px-4 2xl:px-0">
      <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
        <div>
          <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
            Electronics
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <select
            onChange={(e) => setFilterValue(e.target.value)}
            className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto"
          >
            <option value="">Filters</option>
            {filterData.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setSortValue(e.target.value)}
            className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto"
          >
            <option value="">Sort</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="ratingLowHigh">Rating : Low to High</option>
            <option value="ratingHighLow">Rating : High to Low </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
