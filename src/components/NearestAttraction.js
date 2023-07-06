import React from "react";
import "./NearestAttraction.css";
import attrBanner from "../images/attraction_banner.jpg"
import ramling from "../images/attraction/ramling.jpg"
import dam from "../images/attraction/dam.jpg"
import karulGhat from "../images/attraction/karulGhat.jpg"
import mojrai from "../images/attraction/mojrai.webp"
import fort from "../images/attraction/fort.jpg"
import kumbhiDam from "../images/attraction/kumbhiDam.jpg"
import veserafDam from "../images/attraction/veserafDam.jpg"
const NearestAttraction = () => {

  return (
    <>
      <div className="xyz">
        <div className=" position-relative">
          <img
            className="d-block w-100  img-fluid"
            style={{ height: "500px" }}
            src={attrBanner}
            alt=""
          />
        </div>

        <div className="container">
          <div className="row">
            <h1 style={{ marginTop: "30px", textShadow: " 3px 3px grey", textAlign: "center" }}>Nearest Attraction</h1>
          </div>
          <div className="row mt-5 g-4 d-flex justify-content-center">
            <div className="col-lg-4 col-sm-6 d-flex justify-content-center">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={ramling} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Ramling Caves (9 KM Away)</h5>
                  <p class="card-text">A Photographer's Paradise which consists of monolithic temples that are said to be made by Pandavas.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex justify-content-center">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={dam} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Andur Dam</h5>
                  <p class="card-text">Minor Dam with scenic backwater which is just 3 Km away from the palmnest.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex justify-content-center">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={fort} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Fort Gagangiri (16KM)</h5>
                  <p class="card-text">Residing the Ashram of Saint Gagangiri Maharaj. Ancient fort of Chatrapati Shivaji Maharaj.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex justify-content-center">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={karulGhat} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Karul Ghat</h5>
                  <p class="card-text">Beautiful and very scenic in monsoon, Number of waterfall fall down in this Ghat in rainy season with dense Forest.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex justify-content-center">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={kumbhiDam} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Kumbhi Dam (12KM Away)</h5>
                  <p class="card-text">Medium Dam project of 3DMC with a beautiful view and great ambiance in the evening.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex justify-content-center">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={veserafDam} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Vesaraf Dam</h5>
                  <p class="card-text">A minor Dam with good scenic area only 8 Km away from the palmnest farm.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex justify-content-center">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={mojrai} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Morjai Pathar (15KM Away)</h5>
                  <p class="card-text">A highland plateau with a temple for warrior goddess Morjai Devi in an underground cave.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NearestAttraction;
