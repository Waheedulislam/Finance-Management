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
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaEarthAsia } from "react-icons/fa6";


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
                        <Link href="/services" className="hover:border-b pb-2 px-5 border-white text-xl">Services</Link>
                    </li>
                    <li>
                        <Link href="/about-us" className="hover:border-b pb-2 px-5 border-white text-xl">About Us</Link>
                    </li>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <p className="border-2 rounded-full py-1 px-3 border-white text-xl flex justify-center items-center cursor-pointer">
                                <FaEarthAsia className="mr-1" /> EN
                                <IoIosArrowUp className="ml-1" />
                            </p>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent >
                            <DropdownMenuLabel className='text-xl text-gray-700'>EN
                                (English)</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <hr />
                            <DropdownMenuItem className='text-xl text-gray-700'>

                                TH
                                (Thai)</DropdownMenuItem>
                            <hr />
                            <DropdownMenuItem className='text-xl text-gray-700'>

                                ID
                                (Bahasa Indonesia)</DropdownMenuItem>
                            <hr />
                            <DropdownMenuItem className='text-xl text-gray-700'>

                                TW
                                (Traditional Chinese)</DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>

                </ul>

                {/* Contact Us Button */}
                <button className="hidden md:block py-3 px-4 bg-[#FE8B51] bg-transparent  text-white text-2xl font-semibold border hover:bg-white hover:text-[#007aff] hover:shadow-lg">
                    <Link href="/contact"><p className="flex justify-center items-center">Contact Us <IoIosArrowForward className='ml-2' /></p></Link>
                </button>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-[#007aff] p-4 flex flex-col space-y-4  md:hidden text-white items-start">

                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <p className=" pb-2 px-5 text-lg cursor-pointer flex justify-center items-center">Solutions <IoIosArrowDown className="ml-1" /></p>
                                </HoverCardTrigger>
                                <HoverCardContent className='text-left'>
                                    <Link href="/services" className="hover:border-b-2    border-white text-lg">AnyCaaS</Link>
                                    <br />
                                    <hr className="my-2" />
                                    <Link href="/services" className="hover:border-b-2   border-white text-lg">
                                        AnyBaaS</Link>
                                    <br />
                                    <hr className="my-2" />
                                    <Link href="/services" className="hover:border-b-2 pb-2  border-white text-lg">
                                        AnyPaaS</Link>

                                </HoverCardContent>
                            </HoverCard>
                        </li>



                        <li>
                            <Link href="/services" className="hover:border-b pb-2 px-5 border-white text-xl">Services</Link>
                        </li>

                        <li>
                            <Link href="/about-us" className="hover:border-b pb-2 px-5 border-white text-lg">About Us</Link>
                        </li>
                        {/* Contact Us Button */}

                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <p className="border-2 rounded-full py-1 px-3 border-white text-xl flex justify-center items-center cursor-pointer ml-32">
                                    <FaEarthAsia className="mr-1" /> EN
                                    <IoIosArrowUp className="ml-1" />
                                </p>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent >
                                <DropdownMenuLabel className='text-xl text-gray-700'>EN
                                    (English)</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <hr />
                                <DropdownMenuItem className='text-xl text-gray-700'>

                                    TH
                                    (Thai)</DropdownMenuItem>
                                <hr />
                                <DropdownMenuItem className='text-xl text-gray-700'>

                                    ID
                                    (Bahasa Indonesia)</DropdownMenuItem>
                                <hr />
                                <DropdownMenuItem className='text-xl text-gray-700'>

                                    TW
                                    (Traditional Chinese)</DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                        <li className="w-full text-center py-8">
                            <button className="flex md:block py-3 px-4  bg-transparent   text-white text-2xl font-semibold border bg-[#007aff] hover:shadow-lg w-full ">
                                <Link href="/contact"><p className="flex justify-center items-center">Contact Us <IoIosArrowForward className='ml-2' /></p></Link>
                            </button>
                        </li>


                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
