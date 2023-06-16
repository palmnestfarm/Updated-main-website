import React, { useEffect, useState } from "react";
import "./Activities.css";
import axios from "axios"
import ImageLayout from "./Resources/ImageLayout";
import activityBanner from "../images/activityBanner.jpg"
const Activities = () => {
  const [activityData, setActivityData] = useState([])

  useEffect(() => {
    axios.get("https://palmnest-backend-cjpi.vercel.app/activity/getactivity").then((res) => {
      setActivityData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <>
      <div className="container-fluid p-0">
        <ImageLayout
          imageUrl={activityBanner}
          heading="Activities"
        />
      </div>

      <div className="container-fluid mt-5">
        <div className="row d-flex justify-content-center">
          {
            activityData?.map((val, id) => {
              return (
                <div className="col-lg-4 col-sm-6">
                  <span className="text-center"><center>{val.title}</center></span>
                  <img className="img-fluid" src={val.image.url} alt="" />
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  );
};

export default Activities;
