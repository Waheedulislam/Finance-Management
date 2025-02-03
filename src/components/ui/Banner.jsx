import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import img from '../../../public/assets/backgrounds/WaveLinesDesktop2.svg'
import img1 from '../../../public/assets/backgrounds/WaveLinesDesktop1.svg'
import img3 from '../../../public/assets/backgrounds/WaveLinesDesktop3.svg'
import img4 from '../../../public/assets/backgrounds/WaveLinesDesktop4.svg'
import img2 from '../../../public/assets/backgrounds/ctaMobileWaveLines.svg'

const Banner = () => {
    return (
        <div className="bg-[#007aff] w-full "
            style={{ clipPath: "polygon(0 0, 100% 0%, 100% 79%, 0 93%)" }}
        >
            <div className="relative py-10 lg:py-16">
                <div className="flex flex-col  md:flex-row  items-center justify-between gap-10">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 lg:ml-32 text-left lg:mt-0 mt-20 px-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-7xl font-semibold mb-4 lg:mb-6 text-white">
                            Embrace the future of finance
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl lg:py-2 mb-6 text-white">
                            Talk to us to find out how we can transform your organisation for
                            the future
                        </p>

                        {/* CTA Button */}
                        <div className="flex justify-start">
                            <button className="bg-[#FE8B51] w-full sm:w-48 md:w-64  text-white text-lg font-bold py-4 px-6 flex justify-center items-center gap-2 shadow-md hover:bg-[#e67440] transition-all duration-300 ">
                                Reach Out to Us
                                <IoIosArrowForward className="w-5 h-5" />
                            </button>
                        </div>

                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="relative w-[900px] h-[900px] md:h-[500px] -ml-32 ">
                            <Image
                                src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1600&auto=format"
                                alt="banner"
                                fill
                                className="rounded-lg shadow-md object-cover"
                                style={{ clipPath: "polygon(96% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Image
                        src={img}
                        alt="tech"
                        width={424}
                        height={518}
                        style={{ objectFit: 'cover' }}
                        className="absolute  z-10 -top-[18%] right-[20%]"
                    />
                    <Image
                        src={img1}
                        alt="tech"
                        width={424}
                        height={518}
                        style={{ objectFit: 'cover' }}
                        className="absolute  z-10 left-1 top-2 right-[100%]"
                    />
                    <Image
                        src={img2}
                        alt="tech"
                        width={424}
                        height={518}
                        style={{ objectFit: 'cover' }}
                        className="absolute w-full   z-10 -top-[18%] right-1"
                    />
                    <Image
                        src={img3}
                        alt="tech"
                        width={424}
                        height={518}
                        style={{ objectFit: 'cover' }}
                        className="absolute w-full left-0   z-10 -top-[18%] right-0"
                    />
                    <Image
                        src={img4}
                        alt="tech"
                        width={424}
                        height={518}
                        style={{ objectFit: 'cover' }}
                        className="absolute  z-10 left-1 top-2 right-[100%]"
                    />
                </div>
            </div >
        </div >
    );
};

export default Banner;
