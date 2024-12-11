import { useState, useEffect } from "react";
import ProductHeader from "./ProductHeader";
import ProductCard from "./ProductCard";
import sortProducts from "../../../util/SortingPorducts";

const CalculateNumbers = () => {
  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const filter = filterValue ? `category/${filterValue}` : "";
        const response = await fetch(
          `https://fakestoreapi.com/products/${filter}`
        );
        const data = await response.json();
        setRawData(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
      }
    };
    fetchData();
  }, [filterValue]);
  useEffect(() => {
    const sorted = sortProducts(rawData, sortValue);
    setData(sorted);
  }, [rawData, sortValue]);

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 w-full container m-auto">
      <ProductHeader
        setFilterValue={setFilterValue}
        setSortValue={setSortValue}
      />
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {Array.isArray(data) &&
          data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default CalculateNumbers;
