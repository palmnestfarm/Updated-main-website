import React from "react";
import ImageLayout from "./Resources/ImageLayout";
import barBanner from "../images/barBanner.jpg"
import bar1 from "../images/New Images/Bar Slider/bar1.jpg"
import Slider from "react-slick";
const Restaurant = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <ImageLayout
        imageUrl={barBanner}
      />
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 style={{ marginTop: "30px", textAlign: "center", fontFamily: "tentFont" }} className="text-uppercase">Restaurant & Bar</h1>
        </div>
        <div className="row d-flex justify-content-center">
          <h4 className='text-center mt-4 mb-5' style={{ fontFamily: "headerFont", fontSize: "35px" }}> Indulge in Gastronomic Delights</h4>
        </div>

        <div className="row mt-4 d-flex justify-content-center">
          <div className="col-lg-6">
            <Slider {...settings}>
              <div>
                <img src={bar1} alt="img" className="img-fluid" />
              </div>
              <div>
                <img src={bar1} alt="img" className="img-fluid" />
              </div>
              <div>
                <img src={bar1} alt="img" className="img-fluid" />
              </div>
            </Slider>
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
