import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import instaIcon from "../images/icons/insta.png"
import fbIcon from "../images/icons/facebook.png"
import twitterIcon from "../images/icons/twitter.png"
import tumblerIcon from "../images/icons/tumbler.png"
import pinteresIcon from "../images/icons/pinterest.png"
const Footer = () => {
  return (
    <>
      <div className="container-fluid pb-2 pt-4" style={{ marginTop: "120px", background: "#f8f9fa" }}>
        <div className="row d-flex justify-content-center" style={{ width: "95%" }}>
          <div className="col-lg-4 mt-4">
            <h5 className="fw-bold">FIND US AT</h5>
            <p className="mt-4"><b>Address: </b> At Post Khokurle, Kolhapur - Goa road, <br /> Taluka: Gaganbawda, District: Kolhapur. 416206</p>
            <p><b>Phone No:</b> +91  9422517750</p>
            <p><b>Email ID:</b> palmnestfarm@gmail.com</p>
            <p className="mt-4 mb-5">
              <Link to="https://www.instagram.com/the_palmnest_farm/" target="_blank">
                <img src={instaIcon} alt="" style={{ marginLeft: "8px" }} />
              </Link>
              <Link to="https://www.facebook.com/thepalmnestfarm/?ref=pages_you_manage" target="_blank">
                <img src={fbIcon} alt="" style={{ marginLeft: "8px" }} />
              </Link>
              <Link to="https://twitter.com/plamnest" target="_blank">
                <img src={twitterIcon} alt="" style={{ marginLeft: "8px" }} />
              </Link>
              <Link to="https://www.tumblr.com/thepalmnestfarm" target="_blank">
                <img src={tumblerIcon} alt="" style={{ marginLeft: "8px" }} />
              </Link>
              <Link to="https://in.pinterest.com/socialpalmnestfarm/" target="_blank">
                <img src={pinteresIcon} alt="" style={{ marginLeft: "8px" }} />
              </Link>
            </p>
          </div>
          <div className="col-lg-4 mt-4">
            <h5 className="fw-bold">EXPLORE THE PALMNEST FARM</h5>
            <ul className="navbar-nav fw-old">
              <li class="nav-item">
                <Link className="nav-link fs-6 fw-bold" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link fs-6 fw-bold" to="/About-us">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link fs-6 fw-bold" to="/Activities">
                  Activities
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link fs-6 fw-bold" to="/nearest-attraction">
                  Nearest Attraction
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link fs-6 fw-bold" to="/restaurant">
                  Restaurant & Bar
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link fs-6 fw-bold" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 mt-4">
            <h5 className="mb-4 fw-bold">FIND US ON GOOGLE MAP</h5>
            <iframe width="100%" height="280" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=The%20Palmnest%20farm,%20Kolhapur-Goa%20road,%20Taluka:%20Gaganbawda,%20Khokurle,%20Maharashtra%20416206%20Pune+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>.</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
