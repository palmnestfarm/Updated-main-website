import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import axios from 'axios';
import ImageLayout from "../Resources/ImageLayout";
import contactBanner from "../../images/contactBanner.jpg"
const Testimonials = () => {

  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    axios.get("https://palmnest-backend-cjpi.vercel.app/testimonials/gettestimonials").then((res) => {
      setTestimonialData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <div className="xyz">
        <ImageLayout imageUrl={contactBanner} heading="Testimonials" />

        <section className="gallary">
          <div className="container-fluid position-relative">
            <div className="row g-4 mt-5">
              {
                testimonialData?.map((val) => {
                  return (
                    <div className="col-lg-4 mt-3 pt-4 bb">
                      <p className="fw-bold">
                        {val.description}
                      </p>
                      <div className="text-center">
                        <h4 className="fs-5 mt-3 text-capitalize">{val.author}</h4>
                        <h4 className="fs-5 mt-3 text-capitalize">( {val.city} )</h4>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
