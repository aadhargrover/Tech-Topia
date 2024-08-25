import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About Tech Topia" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Welcome to TechTopia </span>{" "}
          ,your ultimate destination for cutting-edge technology and unbeatable deals. At TechTopia, we are passionate about bringing you the latest and greatest in tech innovation, from high-performance laptops and sleek smartphones to smart home devices and accessories. Our mission is to make top-notch technology accessible and enjoyable for everyone.

TechTopia is more than just a tech store—it's a tech enthusiast’s paradise. We carefully curate our selection to include only the most reliable and advanced products, ensuring you get the best quality and performance. Whether you're a gamer seeking the latest graphics power, a professional in need of a high-speed laptop, or a home tech lover searching for smart solutions, we have something for you.

We believe that shopping for technology should be a seamless experience. That's why we offer detailed product descriptions, expert reviews, and competitive pricing to help you make informed decisions. Our user-friendly website is designed to make browsing and purchasing as easy as possible, and our dedicated customer service team is always here to assist you with any questions or concerns.

At TechTopia, we are committed to excellence and innovation. Our team is constantly on the lookout for the newest trends and emerging technologies to keep you at the forefront of the tech world. Join us in exploring the future of technology and experience why TechTopia is the go-to destination for all your tech needs.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
