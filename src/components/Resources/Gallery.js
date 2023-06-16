import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ImageLayout from "../Resources/ImageLayout";
import axios from "axios";
import galleryBanner from "../../images/galleryBanner.jpg"
const Gallery = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    axios.get("https://palmnest-backend-cjpi.vercel.app/gallery/getgallery").then((res) => {
      setGalleryData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <ImageLayout
        imageUrl={galleryBanner}
        heading="Gallery"
      />

      <div className="container-fluid">
        <div className="row mt-5 mb-5">
          <h4 className="text-center">Dive Deeper into The PalmNest Farm!</h4>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-10">
            <Slider {...settings}>
              {
                galleryData?.map((val) => {
                  return (
                    <div>
                      <img
                        src={val.image.url}
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  )
                })
              }

            </Slider>
          </div>

        </div>
      </div>
    </>
  );
};

export default Gallery;
