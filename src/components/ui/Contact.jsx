"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import img from '../../../public/assets/backgrounds/WaveLinesDesktop2.svg'
import img1 from '../../../public/assets/backgrounds/WaveLinesDesktop1.svg'
import img3 from '../../../public/assets/backgrounds/WaveLinesDesktop3.svg'
import img4 from '../../../public/assets/backgrounds/WaveLinesDesktop4.svg'
import img2 from '../../../public/assets/backgrounds/ctaMobileWaveLines.svg'
import Image from "next/image";
const Contact = () => {
    const [clipPathValue, setClipPathValue] = useState("polygon(0 0, 100% 14%, 100% 100%, 0% 100%)");

    useEffect(() => {
        const updateClipPath = () => {
            if (window.innerWidth >= 1024) {
                setClipPathValue("polygon(0 0, 100% 46%, 100% 100%, 0% 100%)");
            } else {
                setClipPathValue("polygon(0 0, 100% 14%, 100% 100%, 0% 100%)");
            }
        };

        updateClipPath();
        window.addEventListener("resize", updateClipPath);

        return () => window.removeEventListener("resize", updateClipPath);
    }, []);

    return (
        <section
            className="relative h-[60vh] lg:h-[530px] w-full text-white overflow-hidden bg-[#007aff] flex justify-center items-center"
            style={{ clipPath: clipPathValue }}
        >
            {/* Main Container */}
            <div className="container w-full flex flex-col px-6 text-left relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold mb-4 lg:mb-6">
                    Legacy no longer
                </h2>
                <p className="text-base sm:text-lg lg:text-xl lg:py-2 mb-6">
                    Talk to us to find out how we can transform your organisation for the future
                </p>

                {/* CTA Button */}
                <div className="flex justify-start text-center">
                    <button className="bg-[#FE8B51] w-full lg:w-52 text-white text-lg sm:text-xl font-bold py-3 px-6 sm:px-8 flex justify-center items-center gap-2 shadow-md hover:bg-[#e67440] transition-all duration-300">
                        Contact Us
                        <IoIosArrowForward className="w-5 h-5" />
                    </button>

                </div>
            </div>

            {/* Background SVG Image (Uncomment if needed) */}
            <div className="hidden md:block">
                <Image
                    src={img}
                    alt="tech"
                    width={424}
                    height={518}
                    style={{ objectFit: 'cover' }}
                    className="absolute  z-10  bottom-[1%] right-[20%]"
                />
                <Image
                    src={img1}
                    alt="tech"
                    width={424}
                    height={518}
                    style={{ objectFit: 'cover' }}
                    className="absolute  z-10 left-1 top-[3%] right-[100%]"
                />
                <Image
                    src={img2}
                    alt="tech"
                    width={424}
                    height={518}
                    style={{ objectFit: 'cover' }}
                    className="absolute w-full   z-10 top-[18%] right-1"
                />
                <Image
                    src={img3}
                    alt="tech"
                    width={424}
                    height={518}
                    style={{ objectFit: 'cover' }}
                    className="absolute w-full left-0    z-10 top-[1%] right-[100%]"
                />
                <Image
                    src={img4}
                    alt="tech"
                    width={424}
                    height={518}
                    style={{ objectFit: 'cover' }}
                    className="absolute  z-10   bottom-1 right-[100%]"
                />
            </div>
        </section>
    );
};

export default Contact;
