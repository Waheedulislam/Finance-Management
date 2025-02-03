"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll behavior detection
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false); // Hide navbar when scrolling down
            } else {
                setIsVisible(true); // Show navbar when scrolling up
            }
            setLastScrollY(window.scrollY);

            // Change background, text color, and logo color for large devices
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`fixed w-full z-50 transition-transform duration-300 
            ${isVisible ? "translate-y-0" : "-translate-y-full"} 
            ${isScrolled ? "lg:bg-[#007aff] lg:text-white shadow-lg" : "lg:bg-transparent lg:text-white"} 
            bg-[#007aff] md:bg-transparent`}>

            <div className="container mx-auto px-6 lg:px-16 py-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    <Image
                        src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
                        alt="logo"
                        height={200}
                        width={200}
                        className={`rounded-lg object-cover transition-all duration-300 
                            ${isScrolled ? "brightness-0 invert" : ""}`}
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex space-x-10  transition-colors duration-300 bg-blend-darken
                    ${isScrolled ? "lg:text-white" : "lg:text-white"}`}>
                    <li>
                        <HoverCard>
                            <HoverCardTrigger>
                                <p className=" pb-2 px-5 text-xl cursor-pointer flex justify-center items-center">Solutions <IoIosArrowDown className="ml-1" /></p>
                            </HoverCardTrigger>
                            <HoverCardContent className='text-left'>
                                <Link href="/services" className="hover:border-b-2    border-white text-xl">AnyCaaS</Link>
                                <br />
                                <hr className="my-2" />
                                <Link href="/services" className="hover:border-b-2   border-white text-xl">
                                    AnyBaaS</Link>
                                <br />
                                <hr className="my-2" />
                                <Link href="/services" className="hover:border-b-2 pb-2  border-white text-xl">
                                    AnyPaaS</Link>

                            </HoverCardContent>
                        </HoverCard>
                    </li>



                    <li>
                        <Link href="/services" className="hover:border-b-2 pb-2 px-5 border-white text-xl">Services</Link>
                    </li>
                    <li>
                        <Link href="/about-us" className="hover:border-b-2 pb-2 px-5 border-white text-xl">About Us</Link>
                    </li>
                    <li>
                        <Link href="/pricing" className="hover:text-blue-400">Pricing</Link>
                    </li>
                </ul>

                {/* Contact Us Button */}
                <button className="hidden md:block py-2 px-4 bg-[#007aff] text-white rounded-lg hover:bg-blue-600">
                    <Link href="/contact">Contact Us</Link>
                </button>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-[#007aff] p-4 flex flex-col space-y-4 text-center md:hidden">

                        <li>
                            <Link href="/solutions" className="block py-2 text-[#f8fafc] hover:text-blue-400">Solutions</Link>
                        </li>
                        <li>
                            <Link href="/services" className="block py-2 text-[#f8fafc] hover:text-blue-400">Services</Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="block py-2 text-[#f8fafc] hover:text-blue-400">About Us</Link>
                        </li>

                        <li>
                            <Link href="/contact" className="block py-2 text-[#f8fafc] hover:text-blue-400">Contact</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
