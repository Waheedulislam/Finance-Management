import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
    return (
        <section className="relative h-[60vh] lg:h-[530px] w-full text-white overflow-hidden bg-blue-600 flex justify-center items-center"
        >
            {/* Main Container */}
            <div className="container w-full max-w-[90%] lg:w-[80%] flex flex-col px-6 text-center md:text-left relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold mb-4 lg:mb-6">
                    Legacy no longer
                </h2>
                <p className="text-base sm:text-lg lg:text-xl lg:py-2 mb-6">
                    Talk to us to find out how we can transform your organisation for the future
                </p>

                {/* CTA Button */}
                <div className="flex justify-center md:justify-start">
                    <button className="bg-[#FE8B51] text-white text-lg sm:text-xl font-bold py-3 px-6 sm:px-8 flex items-center gap-2 rounded-md shadow-md hover:bg-[#e67440] transition-all duration-300">
                        Contact Us
                        <IoIosArrowForward className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Background SVG Image */}
            <img
                src="/assets/backgrounds/WaveLinesDesktop3.svg"
                alt="Background Pattern"
                className="absolute object-cover h-[120%] w-[140%] lg:w-full left-[-20%] top-[-10%] z-0"
            />
        </section>
    );
};

export default Contact;
