import React from "react";

const FallbackImage = ({ img, name }) => {
  return (
    <div>
      {img ? (
        <img src={img} alt={name} className="w-8 h-8 rounded-full" />
      ) : (
        <div className="w-8 h-8 rounded-full bg-ligt_orange flex justify-center items-center">
          <p className="text-center">{name.slice(0, 1)}</p>
        </div>
      )}
    </div>
  );
};

export default FallbackImage;
