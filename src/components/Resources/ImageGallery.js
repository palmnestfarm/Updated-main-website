import React from "react";
import { Link } from "react-router-dom";

const ImageGallery = ({ imageUrl,heading }) => {
  // Sample image URLs

  return (
    <div className="container">
      <div className="d-lg-flex justify-content-center mt-5 flex-wrap">
        {imageUrl?.map((imageUrl, index) => (
          <div className="col-md-5 col-lg-3 m-1" key={index}>
            <Link to={`/image/${encodeURIComponent(imageUrl)}`}>
              <div className="image-container">
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="img-fluid "
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
