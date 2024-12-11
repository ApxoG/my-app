import React from "react";
import TextCard from "./TextCard";
import Chart from "./Chart";
import AvatarCard from "./AvatarCard.jsx";

const Card = ({
  title,
  value,
  description,
  navLink,
  className,
  theme,
  increase,
}) => {
  const renderCard = () => {
    switch (theme) {
      case "text":
        return (
          <TextCard
            title={title}
            value={value}
            description={description}
            navLink={navLink}
            className={className}
            increase={increase}
          />
        );
      case "chart":
        return (
          <Chart
            className={className}
            title={title}
            value={value}
            description={description}
            navLink={navLink}
          />
        );
      case "avatar":
        return (
          <AvatarCard
            title={title}
            value={value}
            description={description}
            navLink={navLink}
            className={className}
          />
        );
      default:
        return null;
    }
  };
  return <>{renderCard()}</>;
};

export default Card;
