import React from 'react'
import ImageLayout from "../Resources/ImageLayout";
import royalCottage_banner from "../../images/royalCottage_banner.jpg"
import Cottageoutdoor from "../../images/Cottageoutdoor.jpg"
const Cottages = () => {
    return (
        <>
            <ImageLayout
                imageUrl={royalCottage_banner}
                heading="Luxurious Tents and Royal Cottages"
            />
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <h4 className='text-center mt-5 mb-5 font-monospace fw-bold'> Immerse Yourself in Opulent Comfort Amidst Nature's Embrace..!</h4>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-lg-6">
                        <img src={Cottageoutdoor} alt="" className='img-fluid' />
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