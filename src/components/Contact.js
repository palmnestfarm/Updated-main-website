import React from "react";
import { BsFillGeoAltFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ImageLayout from "./Resources/ImageLayout";
import contactImg from "../images/contact__image.jpg"
import attrBanner from "../images/New Images/ourStory.jpg"
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
  const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
  const handleSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata.entries());

    axios.post("https://palmnest-backend-cjpi.vercel.app/query/userquery", data).then((res) => {
      notify(1, "Thank You! Our team will get back to you shortly..!")
    }).catch((err) => {
      notify(0, "Oops..Something went wronng..!");
    })

    e.target.name.value = "";
    e.target.mobile.value = "";
    e.target.email.value = "";
    e.target.message.value = ""
  }
  return (
    <>
      <ImageLayout
        imageUrl={attrBanner}
      // heading="CONTACT US"
      />

      <div className="container-fluid">
        <div className="row">
          <h1 style={{ marginTop: "30px", textShadow: " 3px 3px grey", textAlign: "center" }}>Contact Us</h1>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
          <div className="col-lg-6 mt-4">
            <div className="bg-light h-100 ms-2 ">
              <img
                src={contactImg}
                alt="your-image-description"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <form className="bg-white pt-5" onSubmit={handleSubmit} autoComplete="off">
                <div className="me-md-3 mb-3 mb-md-0">
                  <div className="d-flex align-items-center mb-3">
                    <BsFillGeoAltFill className="fs-5 " />
                    <p className="m-1">
                      At Post Khokurle, Kolhapur - <br /> Goa road, Taluka:
                      Gaganbawda, District: Kolhapur. 416206
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <BsFillTelephoneFill className="fs-5" />
                    <p className="m-1">+91 9422517750</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <MdEmail className="fs-5" />
                    <p className="m-1">palmnestfarm@gmail.com</p>
                  </div>
                </div>
                <div className="mb-3 mt-5">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="me-md-3 mb-3 mb-md-0">
                      <input type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="ms-md-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="Your Contact Number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Send Us Your Requirements.."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 bg-black text-white mb-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center ">
        <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=The%20Palmnest%20farm,%20Kolhapur-Goa%20road,%20Taluka:%20Gaganbawda,%20Khokurle,%20Maharashtra%20416206%20Pune+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>.</a>
      </div>
    </>
  );
};

export default Contact;
