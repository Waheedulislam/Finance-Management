"use client"
import { fadeIn } from "@/lib/variants";
import Image from "next/image";


import { motion } from 'framer-motion'

const Features = () => {


    return (
        <div className=" pb-24 mt-40">

            <div className="text-center">
                <h3 className="text-[#1F80F0] text-sm md:text-xl font-semibold mb-4">
                    OUR PHILOSOPHY
                </h3>
                <h1 className="text-[#142a42] text-4xl md:text-6xl font-semibold mb-10">
                    Human-centred innovation
                </h1>
            </div>

            {/* section-1  */}

            <div >
                <div className="w-full h-auto my-10 container mx-auto px-4">
                    <Image
                        src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1600&auto=format"
                        width={1600} // Adjust width as needed
                        height={727} // Adjust height as needed
                        layout="responsive" // Makes the image responsive
                        alt="Picture of the author"
                    />
                </div>

                {/* section-2  */}
                <div

                    className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="bg-[#eff3f8] p-7 rounded-xl shadow-md max-w-sm justify-start "
                        >
                            <div
                                className={`w-12 h-12 flex  rounded-full ${feature.bgColor}  mb-4`}
                            >

                                <img src={feature.icon} alt="" />
                            </div>
                            <h3 className="text-3xl my-6 font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-[#164377] text-lg  mt-4">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;


const features = [
    {
        title: "Full-suite solutions",
        description:
            "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
        icon: "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format", // Replace with an actual icon component if needed
        bgColor: "bg-blue-100",
    },
    {
        title: "Simplify the complex",
        description:
            "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
        icon: "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format", // Replace with an actual icon component if needed
        bgColor: "bg-green-100",
    },
    {
        title: "Cutting-edge tech",
        description:
            "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
        icon: "https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format", // Replace with an actual icon component if needed
        bgColor: "bg-red-100",
    },
];
