"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";  // Import the correct Image component

export default function Future() {
    const [activeTab, setActiveTab] = useState(0);
    const swiperRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <div className="relative">
            {/* Clipped Background */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-[#f7f9fc]"
                style={{ clipPath: "polygon(0 0, 100% 0%, 100% 78%, 0% 100%)" }}
            ></div>

            {/* Content Area */}
            <div className="relative container mx-auto text-center pb-32 lg:pb-56 pt-10 px-4">
                <div className="text-center">
                    <h3 className="text-[#1F80F0] text-sm md:text-xl font-semibold mb-4">
                        TECHNOLOGY BUILT FOR YOU
                    </h3>
                    <h1 className="text-[#142a42] text-4xl md:text-6xl font-semibold mb-10">
                        The future of finance
                    </h1>
                </div>

                {/* Tabs (Only visible on lg devices) */}
                <div className="hidden lg:flex flex-wrap justify-center gap-3 mt-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            className={`px-12 py-3 rounded-full mb-2 text-xl font-semibold transition 
                        ${activeTab === tab.id ? "bg-[#b4d2f5] text-[#1a81f7]" : "text-[#1a81f7] hover:bg-[#b4d2f5]"}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                    pagination={{ clickable: true }}
                    className="mt-8 relative z-10"
                >
                    {tabs.map((tab) => (
                        <SwiperSlide key={tab.id}>
                            <div className="lg:px-10 px-3 py-10 bg-white shadow-lg rounded-xl ">
                                <div className="flex  md:flex-row items-center flex-col-reverse">
                                    {/* Text Section */}
                                    <div className="text-left w-full md:w-1/2 px-4 lg:-mt-8">
                                        <h4 className="text-xl font-semibold text-[#1a81f7]">{tab.label}</h4>
                                        <h3 className="lg:text-5xl text-2xl font-semibold text-[#0b2b50] my-4 lg:my-8">{tab.title}</h3>
                                        <p className="mt-4 text-[#164377] font-bold my-4 lg:my-8">{tab.description}</p>
                                        <p className="mt-2 text-[#164377] ">{tab.descriptionTwo}</p>
                                    </div>

                                    {/* Image Section */}
                                    <div className="w-full md:w-1/2 flex justify-center items-center">
                                        <div className="relative w-[450px] mb-4 h-[250px] md:w-[489px] md:h-[425px]">
                                            <Image
                                                src={tab.image}
                                                alt={tab.label}
                                                layout="fill"
                                                objectFit="cover" // Ensures proper image display
                                                className="rounded-lg shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

// Tab Data
const tabs = [
    {
        id: 0,
        label: "Customer focused",
        title: "Purpose-built financial services",
        description:
            "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
        descriptionTwo:
            "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
        image: "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=320&auto=format",
    },
    {
        id: 1,
        label: "Agile and adaptable",
        title: "Agile and adaptable for growth",
        description:
            "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
        descriptionTwo:
            "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
        image: "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format",
    },
    {
        id: 2,
        label: "Compliance ready",
        title: "Manage compliance with ease",
        description:
            "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
        descriptionTwo:
            "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment .",
        image: "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&auto=format",
    },
    {
        id: 3,
        label: "Secure and safe",
        title: "Highly secure and safe",
        description:
            "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
        descriptionTwo:
            "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
        image: "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=320&auto=format",
    },
];
