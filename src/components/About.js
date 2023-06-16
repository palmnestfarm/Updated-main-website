import React from "react";
import { Carousel } from "bootstrap";
import ImageLayout from "./Resources/ImageLayout";
import aboutBanner from "../images/aboutBanner.jpg"

const About = () => {
  return (
    <>
      <div>
        <ImageLayout
          imageUrl={aboutBanner}
          heading="Our Story"
        />

        <div class="container">
          <div className="text-center">
            <p className="mt-5 fs-5 font-monospace text-secondary">
              Whether you are after the thrill or the tranquillity of a long
              lunch, Palmnest Farm
              <div className="mt-2 fs-5 font-monospace text-secondary">
                {" "}
                is the place for everyone.
              </div>
            </p>
          </div>

          <p className="mt-5 lh-lg font-monospace" style={{ fontSize: "18px" }}>
            The Palmnest Farm provides a welcome escape from the urban world.
            Here the serene beauty and laid back luxury farmstay converges to
            define an enticing pleasure that beckon you back time after time.
            The Palmnest Farm is situated within the bustling and vibrant
            environment of Gaganbawda, 45 km from kolhapur. It is remarkable to
            discover the farming land surrounded by lush greenery with
            sugarcane, seasonal crops and rice paddies alongside 1800 metres of
            Kumbhi river admist the western ghats of Sahayadri which is a
            beautiful calming and settling in the Palmnest Farm. Whether you
            want to spend some quality time with family, arrange a casual get
            together with friends, organise a team building or motivational
            meeting, experience a quiet honeymoon or simply unwind…
          </p>
          <p className="mt-4 lh-lg font-monospace" style={{ fontSize: "18px", marginBottom: "30px" }}>
            The Palmnest Farm is the perfect destination for all your
            requirements. But you have to visit us to believe us. Your friendly
            hosts at Palmnest Farm will do everything to ensure that your
            holiday is not only delightful, but also very special and memorable.
          </p>
        </div>

      </div>
    </>
  );
};

export default About;
