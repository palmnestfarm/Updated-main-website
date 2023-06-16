import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaLink } from "react-icons/fa";
import "./allBlogs.css";

const AllBlogs = () => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePublishComment = () => {
    if (comment.trim() !== "") {
      setCommentsList((prevComments) => [...prevComments, comment]);
      setComment("");
    }
  };

  const handleCancelComment = () => {
    setComment("");
  };
  return (
    <>
      <div className="container d-lg-flex justify-content-between w-75  ">
        <div className="mt-3">
          <span>All Posts</span>
        </div>
        <div className="lh-lg font-monospace mb-2 text-black mt-3">
          <button className="btn-light "> login/sign up</button>
        </div>
      </div>
      <div className="container  justify-content-between w-75 mt-5 border  ">
        <div>{/* nav */}</div>
        <div className="p-5">
          <h2>Kajawa Festival</h2>
          <p>
            It is the dream of many and a sure shot point in most bucket lists
            to experience the Fireflies Festival aka Kajava festival. The nature
            has bestowed us with the unbelievable beauty, to experience and to
            cherish, fireflies are no exception, the beauty with which they glow
            makes us feel like we really are present in the milky way of stars.
            The Palmnest Farm Resort has one of the most dazzling Fireflies
            Festival of the year starting from the first week of June till the
            first week of August in Gaganbawda, Kolhapur.
          </p>
        </div>
        <div className="p-5">
          <img
            src="https://static.wixstatic.com/media/4cebd5_2a0347f7bc824851936e7e4958ed60af~mv2.webp"
            style={{ width: "100%" }}
            alt=""
          />
        </div>
        <div className="p-5">
          {" "}
          <p>
            The glowing of these mysterious creatures brings a sense of calm,
            peace and an environment full of romance and love. It has also
            become a great couple activity to visit this festival at least once.
            It is an old saying that fireflies glow when you are together or if
            you have found your true love! Romantic isn't it?
          </p>
        </div>

        <div className="p-5">
          <img
            src="https://static.wixstatic.com/media/4cebd5_5e0a0de8eabd44e6bf75d773941484aa~mv2.webp"
            style={{ width: "100%" }}
            alt=""
          />
        </div>

        <div className="p-5">
          <p>
            But science has its own explanation on this glowing phenomenon.
            Science says that, The Fireflies light up due to the organic
            chemical present in their abdomen called Luciferin. Every time the
            air rushes into their abdomen, the chemical reacts with the air and
            lights up. This is also called Bioluminescence.
          </p>
        </div>
        <div className="p-5">
          <img
            src="https://static.wixstatic.com/media/4cebd5_460ca9247bd0401bb04549490ee5574f~mv2.jpg/v1/fill/w_840,h_440,al_c,lg_1,q_85,enc_auto/4cebd5_460ca9247bd0401bb04549490ee5574f~mv2.jpg"
            style={{ width: "100%" }}
            alt=""
          />
        </div>

        <div className="p-5">
          <p>
            {" "}
            Another theory proposes thatFireflies produce defensive steroids in
            their bodies that make them unpalatable to predators. Larvae use
            their glows as warning displays to communicate their
            distastefulness. Well let us decide for ourselves which side to
            believe the saying or science! Who wouldn't want to immerse
            themselves in the myriad of colors emitted by the glittering
            fireflies? Come to The Palmnest Farm Resort to experience nature's
            stunning and brilliant colors while surrounded by shimmering
            fireflies.Thousands of fireflies emerge in the open around the
            beginning of June, creating a captivating spectacle for viewers.
            Fireflies are actually beetles with glowing abdomens, not flies.
          </p>
        </div>

        <div className="p-5">
          <img
            src="https://static.wixstatic.com/media/4cebd5_42ca1267c4cd428b9ad3b4224765c338~mv2.jpg/v1/fill/w_925,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cebd5_42ca1267c4cd428b9ad3b4224765c338~mv2.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>

        <div className="p-5">
          <p>
            Nothing in the world occurs without a reason, the fireflies too have
            their own reason for lighting up, the reason none other than,
            Mating!. Light is dissipated by the amazing creatures in order to
            attract the opposing sex. Male fireflies send signals in the form of
            different flashing light patterns, which females reply to in their
            own way. For bystanders, the exchange of light creates a captivating
            phenomenon. The flies survive long enough to reproduce and lay eggs,
            and then they die. The Palmnest Farm Resort is perfect for a weekend
            escape from the hustle and bustle of city life, providing a pleasant
            and peaceful environment. It's also great for a relaxing holiday
            with top-notch amenities. The Palmnest Farm is a Resort nestled in
            Gaganbawda, 45 kilometers from Kolhapur, amid a lively and colorful
            atmosphere. You could use goggle maps to trace the resort. Kolhapur
            Airport is the closest airport (KLH). Vaibhavwadi Road is the
            nearest railway station (VBW). Gaganbawada is easily accessible by
            road. Buses run from Kolhapur to Gaganbawada and take roughly two
            hours to get there
          </p>
        </div>

        <div className="p-5">
          <img
            src="https://static.wixstatic.com/media/4cebd5_14c2e053f9e84b6a92f9ed356aa29af8~mv2.jpg/v1/fill/w_925,h_506,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cebd5_14c2e053f9e84b6a92f9ed356aa29af8~mv2.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>

        <div className="p-5">
          <p>
            You can experience this amazing festival along with a soothing stay
            with lots of activities to participate in, at The Palmnest Farm
            Resort. The Festival happens to be a dream experience for many and
            the amenities provided by the resort add to the glory of this
            glittering festival
          </p>
        </div>

        <div className="p-5">
          <img
            src="https://static.wixstatic.com/media/4cebd5_8de610c4ec034362a666545e14728521~mv2.webp"
            alt=""
            style={{ width: "100%" }}
          />
        </div>

        <div className="p-5">
          <p>
            This Monsoon give your loved ones an opportunity to experience
            something beautifully special. Visit The Palmnest Farm Resort and
            enjoy the Kajava festival to its fullest!
          </p>
        </div>
        <div className="mt-2">
          <hr />
          <div className="d-flex p-2 ">
            <div className=" m-2 ">
              <FaFacebook />
            </div>
            <div className=" m-2">
              <FaTwitter />
            </div>
            <div className=" m-2">
              <FaLinkedin />
            </div>
            <div className=" m-1">
              <FaLink />
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="m-2">19 views</div>
              <div className="m-2">0 Comments</div>
            </div>
            <div>Likes</div>
          </div>
        </div>

        <div className="container d-lg-flex justify-content-center ">
          <div className="mt-3 w-100">
            <div className="">
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Write a comment..."
                className="w-100 p-4 fs-4"
              />

              <div className="d-flex justify-content-end">
                <div className="m-3">
                  <button
                    className="btn btn-secondary mx-2"
                    onClick={handleCancelComment}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={handlePublishComment}
                  >
                    Publish
                  </button>
                </div>
              </div>

              <hr />

              {commentsList.map((comment, index) => (
                <div className="" key={index}>
                {comment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
