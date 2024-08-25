import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Unlocking the Perfect Laptop: Your Ultimate Guide to Choosing the Right Device" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Tech Talkies: </span>{" "}Selecting the ideal laptop can be a daunting task given the myriad of options available, but focusing on the right features can make the decision easier. Begin by identifying your primary needs—whether you're looking for a machine for everyday tasks, intensive work, or gaming. Performance is key, so look for laptops with a powerful processor, such as an Intel Core i5 or AMD Ryzen 5, and ample RAM (at least 8GB) to handle multitasking effortlessly. For storage, opt for a Solid State Drive (SSD) rather than a traditional Hard Disk Drive (HDD) to benefit from faster boot times and quicker file access.

Display quality is another crucial factor; a high-resolution screen, preferably Full HD (1080p) or better, will provide crisp visuals and reduce eye strain. For those who need to use their laptop on the go, long battery life is essential—aim for at least 8-10 hours of usage on a single charge. Additionally, a laptop should be built for portability, featuring a lightweight and durable design to withstand daily transport.

Connectivity options are also important. Ensure your laptop includes a variety of ports, such as USB-C, USB-A, and HDMI, to accommodate different peripherals and accessories. Modern laptops should support the latest Wi-Fi and Bluetooth standards to ensure fast and reliable wireless connections.

Don’t forget the keyboard and trackpad; a comfortable, backlit keyboard with good key travel and a responsive trackpad will enhance your typing and navigation experience. For users who engage in gaming or graphic design, a laptop with a dedicated graphics card (like NVIDIA GeForce or AMD Radeon) will offer superior performance compared to integrated graphics.

Security features such as a fingerprint scanner or facial recognition can add an extra layer of protection for your data. Finally, consider the warranty and customer support offered by the manufacturer; a comprehensive warranty and reliable support can save you from future headaches. By keeping these factors in mind, you can confidently choose a laptop that aligns with your needs and provides a satisfying user experience.        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
