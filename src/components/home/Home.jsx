import React from "react";
import { useState, useEffect } from "react";
import ClientCarousel from "./Clientcarousel.jsx";
import Carousel from "./carousel.jsx";
import WhyTrustUs from "./WhytrustUs.jsx";
import ProductRange from "./productRange.jsx";
import ReviewsSection from "./reviews.jsx";

const Home = () => {

    return(
        <>

        {/* <section className="bannercontainer">
            <div className="container relative w-full h-full flex justify-center items-center">
                <h2 className="font-oswald text-4xl md:text-5xl mb-4 text-center font-bold text-transparent bg-cover bg-center bg-clip-text" style= {{ backgroundImage : "url('/bg.jpg')" }} >Driving Your Business Forward with Quality Auto Parts</h2>
                <p>Trusted Since 1971 | Your One-Stop Solution for Automobile Parts</p>
            </div>
        </section> */}

        <section className="TopBanner relative h-screen text-white flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-cover bg-center z-0 opacity-68" style={{ backgroundImage: "url('/bg.jpg')" }}></div>

            <div className="absolute inset-0 bg-black opacity-40 z-5"></div> 

                <h1 className="font-oswald text-5xl md:text-5xl mb-4 text-center z-10 drop-shadow-lg [text-shadow:3.5px_4.5px_3px_var(--tw-shadow-color)] shadow-black" >Driving Your Business Forward with Quality Auto Parts</h1>
                <p className="font-roboto text-lg md:text-xl mb-6 text-center z-10 drop-shadow-lg [text-shadow:1px_2px_2px_var(--tw-shadow-color)] shadow-black">Trusted Since 1971 | Your One-Stop Solution for Automobile Parts</p>
    
            <div className="absolute bottom-8 inset-x-0 flex justify-center space-x-4 z-20">
                <button className="shop bg-white text-steel-blue font-roboto py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300 drop-shadow-lg [text-shadow:1px_1px_2.5px_var(--tw-shadow-color)] shadow-black">Shop Now</button>
                <button className="explore border border-white text-white font-roboto py-2 px-6 rounded-md hover:bg-gray-100 hover:text-steel-blue transition duration-300 drop-shadow-lg [text-shadow:1px_1px_5.6px_var(--tw-shadow-color)] shadow-black">Explore Our Products</button>
            </div>
        </section>

        {/* <div className="h-2.5 bg-slate-600 relative z-20"></div> */}

        <section className="about_us h-[35vh] text-white flex flex-col justify-center items-center">
            <h2 className="font-oswald text-6xl md:text-4xl mb-4 text-center [text-shadow:1px_2px_4px_var(--tw-shadow-color)] shadow-black text-transparent bg-cover bg-center bg-clip-text" style={{backgroundImage: "url('/I.jpg')"}}>Over 50 Years of Excellence</h2>
            <p className="font-roboto text-lg md:text-xl text-center text-slate-900">Customer Satisfaction, Quality Assurance, and Long-term Relationships</p>
        </section>

        {/* <div className="h-1 bg-slate-600 relative z-20"></div> */}

        <ProductRange />

        {/* <div className="h-2.5 bg-slate-600 relative z-20"></div> */}

        <section className="trust_us py-1 ">
            
        <WhyTrustUs />

        {/* <div className="h-1 bg-slate-600 relative z-20"></div> */}

        <ReviewsSection />
        </section>

        <Carousel />

        </>
    )
}

export default Home;
