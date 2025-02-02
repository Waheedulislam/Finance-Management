import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="mb-60 relative">
            <div
                className="absolute top-40 left-0 w-full h-full bg-gradient-to-t from-blue-50"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 78%, 0% 100%)" }}
            ></div>

            <div className="container mx-auto px-4 relative lg:px-10 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Text Section */}
                    <div className="text-left w-full md:w-1/2 px-4 mt-5 lg:mt-8">
                        <h4 className="text-xl font-semibold text-[#1a81f7]">POWERING THE FUTURE OF FINANCE</h4>
                        <h2 className="lg:text-7xl text-3xl font-semibold text-[#0b2b50] my-4 lg:my-8">
                            Uncovering new ways to delight customers
                        </h2>
                        <p className="mt-4 text-[#164377] font-bold my-4 lg:my-8">
                            AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.
                        </p>
                        <p className="mt-2 text-[#164377]">
                            Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                        <div className="relative w-[450px] h-[250px] md:w-[489px] md:h-[425px] flex justify-center items-center">
                            <Image
                                src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=640&auto=format"
                                alt="tech"
                                width={424}
                                height={518}
                                style={{ objectFit: 'cover' }}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
