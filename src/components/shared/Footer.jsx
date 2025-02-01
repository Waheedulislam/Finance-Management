import Image from 'next/image';
import React from 'react';
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            {/* Footer Section 1 */}
            <div className="bg-[#002045]">
                <div className="container mx-auto flex md:flex-row items-center  justify-between py-8 px-4 gap-4 md:space-y-0">

                    {/* Logo */}
                    <Image
                        width={220}
                        height={220}
                        src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp"
                        alt="Logo"
                    />

                    {/* Solutions Links - Hidden on mobile */}
                    <div className="hidden lg:flex items-center text-[#00E9EA] space-x-6">
                        <p className="border-b lg:border-b-0 lg:border-r border-blue-dark px-4 py-2 text-lg font-semibold">
                            Our Solutions
                        </p>
                        <div className="flex space-x-6">
                            {["AnyCaaS", "AnyBaaS", "AnyPaaS"].map((item, index) => (
                                <p key={index} className="hover:text-blue-400 text-lg cursor-pointer transition-colors duration-300">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Social Links - Visible on mobile */}
                    <div className="flex gap-4 text-white text-xl lg:hidden">
                        <a href="https://www.linkedin.com" aria-label="LinkedIn">
                            <FaLinkedin className="text-blue-600 transition duration-300 h-8 w-8" />
                        </a>
                        <a href="tel:01633521872" aria-label="Phone">
                            <FaPhoneAlt className="text-blue-600 transition duration-300 h-8 w-8" />
                        </a>
                        <a href="mailto:waheeduli82@gmail.com" aria-label="Email">
                            <MdEmail className="text-blue-600 transition duration-300 h-8 w-8" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Section 2 */}
            <div className="bg-[#00152D]">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4 text-[#1F80F0] text-sm text-center md:text-left">
                    <p>
                        <strong>©2023 All rights reserved.</strong> Any Technology Pte Ltd.
                    </p>
                    <p className="mt-2 md:mt-0 cursor-pointer hover:underline">Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
