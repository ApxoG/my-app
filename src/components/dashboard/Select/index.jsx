import React, { useCallback, useMemo, useState } from "react";

const Select = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div className="flex justify-between w-full">
        <p>count is : {count}</p>
        <button onClick={handleClick} className="bg-black text-white p-5">
          Click me
        </button>
      </div>
    </>
  );
};

export default Select;
