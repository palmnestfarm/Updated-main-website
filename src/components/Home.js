import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import aboutImg from "../images/New Images/homePage_aboutImg.jpg"
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import axios from "axios";
import homeImg1 from "../images/New Images/Home Slider/homeSlider1.jpg"
import homeImg2 from "../images/New Images/Home Slider/homeSlider2.jpg"
import homeImg3 from "../images/New Images/Home Slider/homeSlider3.jpg"
import homeImg4 from "../images/New Images/Home Slider/homeSlider4.jpg"
const Home = () => {
  const [carouselData, setCarouselData] = useState([]);
  useEffect(() => {
    axios.get("https://palmnest-backend-cjpi.vercel.app/home/gethomecarousel").then((res) => {
      setCarouselData(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <Carousel>
              {
                carouselData?.map((val) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100 img-fluid"
                        src={val.image.url}
                        alt="Image"
                      />
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="text-center mt-5">
            <h6 className="fw-bold text-uppercase">
              TRULY SECLUDED FROM THE REST OF THE WORLD
            </h6>
            <h1 className="fw-light mt-4" style={{ color: "#05828e" }}>LIKE NOWHERE ELSE</h1>
            {/* <Typewriter
              options={{
                strings: ['The Place where you would love to stay...!'],
                autoStart: true,
                loop: true,
                fontSize: "10px"
              }}
            /> */}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-11">
            <p className="mt-5 lh-lg mb-5" style={{ textAlign: "center", fontSize: "1.1rem" }}>
              Secluded in the Western ghats of Maharashtra, Palmnest Resort is like nowhere else. A luxury resort of Gaganbawda, located in Khokurle Village, your all-inclusive stay will be the experience of a lifetime.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-6">
            <img src={aboutImg} alt="Image" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <p className="mt-2" style={{ textAlign: "center", fontSize: "17px", lineHeight: "35px" }}>
              Step into a world of serene beauty and indulgent farm stays at The PalmNest Farm.
              Nestled in the enchanting locale of Gaganbawda, a mere 45 km from the bustling city of
              Kolhapur, our resort offers a sanctuary of tranquility. Immerse yourself in the
              picturesque surroundings adorned with lush greenery, swaying sugarcane fields, and the
              gentle flow of the Kumbhi River. Whether you seek a rejuvenating family getaway, a
              memorable gathering with friends, a romantic
              honeymoon, or simply a place to unwind and reconnect with nature, The PalmNest Farm
              is the perfect destination.
            </p>
          </div>
        </div>
      </div>

      <div className="container w-100" style={{ marginTop: "120px", marginBottom: "80px" }}>
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              <div>
                <img src={homeImg1} alt="" className="img-fluid" />
              </div>
              <div>
                <img src={homeImg3} alt="" className="img-fluid" />
              </div>
              <div>
                <img src={homeImg2} alt="" className="img-fluid" />
              </div>
              <div>
                <img src={homeImg4} alt="" className="img-fluid" />
              </div>
              <div>
                <img src={homeImg1} alt="" className="img-fluid" />
              </div>
              <div>
                <img src={homeImg4} alt="" className="img-fluid" />
              </div>
              <div>
                <img src={homeImg3} alt="" className="img-fluid" />
              </div>
              <div>
                <img src={homeImg2} alt="" className="img-fluid" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
