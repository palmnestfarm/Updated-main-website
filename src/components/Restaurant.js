import React from "react";
import ImageLayout from "./Resources/ImageLayout";
import barBanner from "../images/barBanner.jpg"
import barInside from "../images/barInside.jpg"
const Restaurant = () => {

  return (
    <>
      <ImageLayout
        imageUrl={barBanner}
        heading="RESTAURANT & BAR"
      />
      <div className="container-fluid mt-4">

        <div className="row d-flex justify-content-center">
          <h4 className='text-center mt-5 mb-5 font-monospace fw-bold'> Indulge in Gastronomic Delights..!</h4>
        </div>

        <div className="row mt-4 d-flex justify-content-center">
          <div className="col-lg-6">
            <img src={barInside} alt="img" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <p style={{ textAlign: "justify", lineHeight: "32px", marginTop: "35px" }}>
              &emsp;Savor Exquisite Flavors at Our Restaurant and Bar treat your taste buds to a culinary adventure at our restaurant and bar. Our talented chefs combine fresh, locally sourced ingredients with culinary expertise to create a
              menu that tantalizes the senses. Indulge in a harmonious fusion of regional specialties
              and international cuisine, complemented by a thoughtfully curated selection of
              beverages. Whether you desire a sumptuous meal or a refreshing drink, our restaurant
              and bar offer a delightful dining experience amidst the serene ambiance of The
              PalmNest Farm
            </p>
          </div>
        </div>
      </div >
    </>
  );
};

export default Restaurant;
