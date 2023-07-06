import React from 'react'
import ImageLayout from "../Resources/ImageLayout";
import aboutBanner from "../../images/New Images/tentCoverImg.jpg"
import tentImg1 from "../../images/New Images/Luxury Tents Slider/tent1.jpg"
import tentImg2 from "../../images/New Images/Luxury Tents Slider/tent2.jpg"
import tentImg3 from "../../images/New Images/Luxury Tents Slider/tent3.jpg"
import Slider from "react-slick";
const Tents = () => {
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
                imageUrl={aboutBanner}
            />

            <div className="container-fluid mt-4">
                <div className="row">
                    <h1 style={{ marginTop: "20px", textShadow: " 3px 3px grey", textAlign: "center" }}>Luxurious Tents </h1>
                </div>
                <div className="row d-flex justify-content-center">
                    <h4 className='text-center mt-5 mb-5 font-monospace fw-bold'> Immerse Yourself in Opulent Comfort Amidst Nature's Embrace..!</h4>
                </div>

                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-lg-6">
                        <Slider {...settings}>
                            <div>
                                <img src={tentImg1} alt="img" className="img-fluid" />
                            </div>
                            <div>
                                <img src={tentImg2} alt="img" className="img-fluid" />
                            </div>
                            <div>
                                <img src={tentImg3} alt="img" className="img-fluid" />
                            </div>                            <div>
                                <img src={tentImg1} alt="img" className="img-fluid" />
                            </div>
                            <div>
                                <img src={tentImg2} alt="img" className="img-fluid" />
                            </div>
                            <div>
                                <img src={tentImg3} alt="img" className="img-fluid" />
                            </div>
                        </Slider>
                    </div>
                    <div className="col-lg-6">
                        <p style={{ textAlign: "justify", lineHeight: "32px" }}>
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
            </div >
        </>
    )
}

export default Tents