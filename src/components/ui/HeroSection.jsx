import Image from 'next/image';
import React from 'react';
import img from '../../../public/assets/backgrounds/WaveLinesDesktop1.svg'

const HeroSection = () => {
    return (
        <div className="mb-60 relative">
            <div
                className="absolute top-40 left-0 w-full h-full bg-gradient-to-t from-blue-50"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 78%, 0% 100%)" }}
            ></div>

            <div className="container mx-auto px-4 relative lg:px-10 py-10">
                <div className=" flex flex-col md:flex-row items-center justify-between">
                    {/* Text Section */}
                    <div className="text-left w-full md:w-1/2 px-4 mt-5 lg:mt-8">
                        <h4 className="text-xl font-semibold text-[#1a81f7]">POWERING THE FUTURE OF FINANCE</h4>
                        <h2 className="lg:text-7xl text-4xl font-semibold text-[#0b2b50] my-4 lg:my-8">
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
                    <div className="relative w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                        {/* Background Decorative Image */}
                        <Image
                            src={img}
                            alt="tech"
                            width={400}
                            height={500}
                            className="absolute top-[-10%] sm:top-[-15%] left-[0%] sm:right-[15%] z-0 opacity-50"
                        />
                        {/* main-image  */}
                        <div className="relative lg:mt-8 mt-28 w-[450px] h-[250px] md:w-[489px] md:h-[425px] flex justify-center items-center">
                            <Image
                                src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=640&auto=format"
                                alt="tech"
                                width={424}
                                height={518}
                                // style={{ objectFit: 'cover' }}
                                className=" rounded-lg shadow-md "
                            />
                        </div>
                        {/* short-image  */}
                        <div>
                            <Image
                                src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format"
                                alt="tech"
                                width={424}
                                height={518}
                                style={{ objectFit: 'cover' }}
                                className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl animate-bounce"
                            />
                            <Image
                                src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format"
                                alt="tech"
                                width={424}
                                height={518}
                                style={{ objectFit: 'cover' }}
                                className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl animate-bounce"
                            />
                            <Image
                                src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format"
                                alt="tech"
                                width={424}
                                height={518}
                                style={{ objectFit: 'cover' }}
                                className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl animate-bounce"
                            />


                        </div>
                        {/* line-image-bottom  */}
                        <div>
                            <Image
                                src="https://anytxn.com/backgrounds/home/futureOfFinance/foreground.png"
                                alt="tech"
                                width={424}
                                height={518}
                                style={{ objectFit: 'cover' }}
                                className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
                            />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
