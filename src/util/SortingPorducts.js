const sortProducts = (data, sortValue) => {
  if (!Array.isArray(data)) return data;
  let sortedData = [...data];

  switch (sortValue) {
    case "priceLowHigh":
      sortedData.sort((a, b) => a.price - b.price);
      break;
    case "priceHighLow":
      sortedData.sort((a, b) => b.price - a.price);
      break;
    case "ratingLowHigh":
      sortedData.sort((a, b) => a.rating.rate - b.rating.rate);
      break;
    case "ratingHighLow":
      sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
      break;
    default:
      // No sorting applied
      break;
  }

  return sortedData;
};
export default sortProducts;
