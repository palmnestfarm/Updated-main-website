import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import aboutImg from "../images/about_us_img.webp"
import pinkBanner from "../images/pinkBanner.webp"
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
const Home = () => {
  const [carouselData, setCarouselData] = useState([]);
  useEffect(() => {
    axios.get("https://palmnest-backend-cjpi.vercel.app/home/gethomecarousel").then((res) => {
      setCarouselData(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])

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
        <div className="text-center">
          <div className="text-center mt-5">
            <h1 class=" font-monospace text-secondary fs-1 lh-sm fw-light">
              Welcome to The PalmNest Farm
            </h1>
            <Typewriter
              options={{
                strings: ['The Place where you would love to stay...!'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-11">
            <p className="mt-5 lh-lg font-monospace" style={{ textAlign: "justify", fontSize: "1.1rem" }}>
              <b>The Palmnest Farm</b> provides a welcome escape from the urban world. Here
              the serene beauty and laid back luxury farmstay converges to define an
              enticing pleasure that beckon you back time after time.
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
            <p className="font-monospace mt-2" style={{ textAlign: "justify", fontSize: "17px", lineHeight: "35px" }}>
              Step into a world of serene beauty and indulgent farm stays at The PalmNest Farm.
              Nestled in the enchanting locale of Gaganbawda, a mere 45 km from the bustling city of
              Kolhapur, our resort offers a sanctuary of tranquility. Immerse yourself in the
              picturesque surroundings adorned with lush greenery, swaying sugarcane fields, and the
              gentle flow of the Kumbhi River. Whether you seek a rejuvenating family getaway, a
              memorable gathering with friends, a productive team-building retreat, a romantic
              honeymoon, or simply a place to unwind and reconnect with nature, The PalmNest Farm
              is the perfect destination.
            </p>
          </div>
        </div>
      </div>

      <div className="position-relative mt-5">
        <img
          className="d-block w-100"
          src={pinkBanner}
          alt=""
          style={{ height: "500px", width: "100%" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="rounded-circle bg-white p-5 ">
            <div className="text-center">
              <p>CONTACT US</p>
              <p>
                At Post Khokurle, Kolhapur - Goa road,Taluka:
                <div> Gaganbawda, District: Kolhapur. 416206</div>
              </p>
              <p>Phone No :+91 9422517750</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
