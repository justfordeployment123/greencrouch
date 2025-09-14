import React, { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// Import partner logos
import partnerBgImg from '/src/assets/Partnerbgimg.png';
import ns1 from "/src/assets/ns1.jpg";
import ns2 from "/src/assets/ns2.webp";
import ns3 from "/src/assets/ns3.jpg";
import ns5 from "/src/assets/ns5.jpg";
import ns6 from "/src/assets/ns6.png";
import ns8 from "/src/assets/ns8.png";
import ns7 from "/src/assets/ns7.jpg";
import b1 from "/src/assets/Brandlogofcompress/b1.jpg";
import b2 from "/src/assets/Brandlogofcompress/b2.jpg";
import b3 from "/src/assets/b3.jpg";
import b4 from "/src/assets/b4.jpg";
import b5 from "/src/assets/Brandlogofcompress/b5.jpg";
import b6 from "/src/assets/b6.jpg";
import b7 from "/src/assets/Brandlogofcompress/b7.jpg";
import b8 from "/src/assets/b8.png";
import b9 from "/src/assets/b9.jpeg";
import d1 from "/src/assets/d1.webp";
import d4_png from "/src/assets/d4.png";
import d3 from "/src/assets/d3.jpg";
import d4_jpg from "/src/assets/d4.jpg";
import d5 from "/src/assets/d5.jpg";


// Working Marquee component with actual animation
const Marquee = ({ children, speed = 50, direction = "left" }) => {
  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .marquee-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .marquee-content {
          display: flex;
          animation: ${direction === "left" ? "scroll-left" : "scroll-right"} ${100 / speed}s linear infinite;
        }
        
        .marquee-item-group {
          display: flex;
          flex-shrink: 0;
          align-items: center;
        }
      `}</style>
      
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-item-group">{children}</div>
          <div className="marquee-item-group">{children}</div>
        </div>
      </div>
    </>
  );
};

const Partners = () => {
  const [clicked, setClicked] = useState(false);

  const networks = [
    { src: ns1, name: "Network 1" },
    { src: ns2, name: "Network 2" },
    { src: ns3, name: "Network 3" },
    { src: ns5, name: "Network 5" },
    { src: ns6, name: "Network 6" },
    { src: ns8, name: "Network 8" },
    { src: ns7, name: "Network 7" },
  ];

  const brands = [
    { src: b1, name: "Brand 1" },
    { src: b2, name: "Brand 2" },
    { src: b3, name: "Brand 3" },
    { src: b4, name: "Brand 4" },
    { src: b5, name: "Brand 5" },
    { src: b6, name: "Brand 6" },
    { src: b7, name: "Brand 7" },
    { src: b8, name: "Brand 8" },
    { src: b9, name: "Brand 9" },
  ];

  const distributors = [
    { src: d1, name: "Distributor 1" },
    { src: d4_png, name: "Distributor 4" },
    { src: d3, name: "Distributor 3" },
    { src: d4_jpg, name: "Distributor 4" },
    { src: d5, name: "Distributor 5" },
  ];


  return (
    <div className="w-full h-screen overflow-hidden">
      {/* desktop and larger  */}
      <div className="hidden md:block ml-[290px] mt-[80px] pr-8">
        {/* Network & streamers */}
        <h2 className="mb-5 text-xl font-semibold xl:text-2xl lg:text-[28px] lowercase">
          networks <span className="text-[#319d0a]">&</span> streamers
        </h2>
        <div className="flex flex-row items-center mb-14 gap-2">
          {networks.map((partner, i) => (
            <div key={i} className="h-[70px] overflow-hidden">
              <img
                src={partner.src}
                alt={partner.name}
                className="h-[70px] w-auto object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Brands */}
        <h2 className="mb-5 text-xl font-semibold xl:text-2xl lg:text-[28px] lowercase">
          brands
        </h2>
        <div className="flex flex-row items-center mb-14 gap-2">
          {brands.map((partner, i) => (
            <div key={i} className="h-[70px] overflow-hidden">
              <img
                src={partner.src}
                alt={partner.name}
                className="h-[70px] w-auto object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Distributors */}
        <h2 className="mb-5 font-semibold xl:text-2xl lg:text-[28px] lowercase">
          distributors
        </h2>
        <div className="flex flex-row items-center gap-2">
          {distributors.map((partner, i) => (
            <div key={i} className="h-[70px] overflow-hidden">
              <img
                src={partner.src}
                alt={partner.name}
                className="h-[70px] w-auto object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Mobile & Tablet (Marquee Layout with Background Image) */}
      <div className="relative flex flex-col px-2 py-16 space-y-8 md:hidden sm:px-4">
        {/* Background Image with Blur/Opacity */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10 blur-sm"
          style={{
            backgroundImage: `url(${partnerBgImg})`,
          }}
        />

        {/* Content with relative positioning */}
        <div className="relative z-10">
          <h2 className="mb-8 text-3xl font-semibold text-center text-white sm:text-4xl">
            Our Premium <span className="text-[#319d0a]">Partners</span>
          </h2>

          {/* Streamers - Moving LEFT */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-center text-gray-300">
              Networks & Streamers
            </h3>
            <div className="relative w-full">
              <Marquee speed={25} direction="left">
                {networks.map((partner, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center justify-center h-16 w-28 mx-3"
                  >
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="h-full w-auto object-contain max-w-full"
                    />
                  </div>
                ))}
              </Marquee>
              {/* Gradient overlays */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Brands - Moving LEFT */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-center text-gray-300">Brands</h3>
            <div className="relative w-full">
              <Marquee speed={30} direction="left">
                {brands.map((partner, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center justify-center h-16 w-28 mx-3"
                  >
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="h-full w-auto object-contain max-w-full"
                    />
                  </div>
                ))}
              </Marquee>
              {/* Gradient overlays */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Distributors - Moving RIGHT */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-center text-gray-300">
              Distributors
            </h3>
            <div className="relative w-full">
              <Marquee speed={28} direction="right">
                {distributors.map((partner, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center justify-center h-16 w-28 mx-3"
                  >
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="h-full w-auto object-contain max-w-full"
                    />
                  </div>
                ))}
              </Marquee>
              {/* Gradient overlays */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;