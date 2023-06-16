import React from "react";
import { useParams } from "react-router-dom";

const ImageGallery = () => {
  const { imageUrl } = useParams();

  console.log(imageUrl)
  return (
    <div>
      <h1>Image Page</h1>
      <img src={imageUrl} alt="Selected Image" />
    </div>
  );
};

export default ImageGallery;
