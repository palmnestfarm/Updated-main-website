import React from 'react'
import ImageLayout from "../Resources/ImageLayout";
import royalCottage_banner from "../../images/royalCottage_banner.jpg"
import Cottage1 from "../../images/New Images/Cottage Slider/cottage1.jpg"
import Cottage2 from "../../images/New Images/Cottage Slider/cottage2.jpg"
import Cottage3 from "../../images/New Images/Cottage Slider/cottage3.jpg"
import Slider from "react-slick";
const Cottages = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
    };
    return (
        <>
            <ImageLayout
                imageUrl={royalCottage_banner}
            />
            <div className="container-fluid">
                <div className="row">
                    <h1 style={{ marginTop: "30px", textShadow: " 3px 3px grey", textAlign: "center" }}>Royal Cottages</h1>
                </div>
                <div className="row d-flex justify-content-center">
                    <h4 className='text-center mt-5 mb-5 font-monospace fw-bold'> Immerse Yourself in Opulent Comfort Amidst Nature's Embrace..!</h4>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-lg-6">
                        <Slider {...settings}>
                            <div>
                                <img src={Cottage1} alt="img" className="img-fluid" />
                            </div>
                            <div>
                                <img src={Cottage2} alt="img" className="img-fluid" />
                            </div>
                            <div>
                                <img src={Cottage3} alt="img" className="img-fluid" />
                            </div>
                        </Slider>
                    </div>
                    <div className="col-lg-6">
                        <p style={{ textAlign: "justify", lineHeight: "32px", marginTop: "25px" }}>
                            &emsp;Experience the epitome of luxury and natural beauty with our exquisite accommodation
                            options at The PalmNest Farm. Choose from our luxurious tents, where you can bask in
                            the allure of the great outdoors without compromising on comfort. Alternatively, indulge
                            in regal opulence with our Royal Cottages, offering a haven of relaxation amidst the
                            serene surroundings. <br /> Each accommodation option is thoughtfully designed to provide
                            the perfect blend of comfort, elegance, and immersion in nature, ensuring an
                            unforgettable stay for our discerning guests
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cottages