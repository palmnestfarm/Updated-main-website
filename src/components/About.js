import React from "react";
import { Carousel } from "bootstrap";
import ImageLayout from "./Resources/ImageLayout";
import aboutBanner from "../images/New Images/ourStory.jpg"

const About = () => {
  return (
    <>
      <div>
        <ImageLayout
          imageUrl={aboutBanner}
        />

        <div class="container">
          {/* <div className="row">
            <h2 style={{ marginTop: "60px", textShadow: " 3px 3px grey", textAlign: "center" }}>Our Story</h2>
          </div> */}
          <div className="row">
            <div className="text-center mt-3">
              <h6 className="fw-bold text-uppercase">
                TRULY SECLUDED FROM THE REST OF THE WORLD
              </h6>
              <h1 className="fw-light mt-4" style={{ color: "#05828e" }}>LIKE NOWHERE ELSE</h1>
            </div>
          </div>
          <p className="mt-5 lh-lg" style={{ fontSize: "18px", textAlign: "center" }}>
            Escape to Tranquil Luxury at The PalmNest Farm Step into a world of serene beauty and indulgent farm stays at The PalmNest Farm. Nestled in the enchanting locale of Gaganbawda, a mere 45 km from the bustling city of Kolhapur, our resort offers a sanctuary of tranquility. Immerse yourself in the picturesque surroundings adorned with lush greenery, swaying sugarcane fields, and the gentle flow of the Kumbhi River. Whether you seek a rejuvenating family getaway, a memorable gathering with friends, a productive team-building retreat, a romantic honeymoon, or simply a place to unwind and reconnect with nature, The PalmNest Farm is the perfect destination.
          </p>
        </div>

      </div>
    </>
  );
};

export default About;
