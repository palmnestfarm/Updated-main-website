import React, { useState } from "react";

function Card({
  imageUrl,
  title,
  description,
  buttonLabel,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="imgbox">
        <img src={imageUrl} alt="" className="nimg" />
      </div>
      <div className="content">
        <h2 className="ntext">{title}</h2>
        <p className="npara text-justify">{description}</p>
        {isHovered ? (
          <button type="button" className="btn btn-danger">
            {buttonLabel}
          </button>
        ) : (
          <h></h>
        )}
      </div>
    </div>
  );
}

export default Card;
