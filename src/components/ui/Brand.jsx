import Image from 'next/image';
import React from 'react';

const Brand = () => {
    return (
        <div className='container mx-auto px-4 mb-10'>

            <div className='my-10 text-center'>
                <h3 className='text-[#1F80F0] text-xl font-semibold'>TRUSTED BY THE BEST
                </h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                    <div className='text-[#151D2F] text-xl font-semibold'>
                        Years of Experience</div>
                    <div className='text-[#151D2F] text-xl font-semibold'>
                        Financial Institutions</div>
                    <div className='text-[#151D2F] text-xl font-semibold'>Customers Each</div>
                </div>
            </div>

            {/* image-section  */}
            <div className='mt-xl grid grid-cols-2  items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-16 gap-y-[34px]'>
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&fm=webp"
                    alt="Brand 1"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&fm=webp"
                    alt="Brand 2"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&fm=webp"
                    alt="Brand 3"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&fm=webp"
                    alt="Brand 4"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&fm=webp"
                    alt="Brand 5"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&fm=webp"
                    alt="Brand 6"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&fm=webp"
                    alt="Brand 7"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&fm=webp"
                    alt="Brand 8"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&fm=webp"
                    alt="Brand 9"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp"
                    alt="Brand 10"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&fm=webp"
                    alt="Brand 11"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&fm=webp"
                    alt="Brand 12"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&fm=webp"
                    alt="Brand 13"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&fm=webp"
                    alt="Brand 14"
                    className="w-full h-auto"
                />
                <Image
                    width={603}
                    height={414}
                    src="https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&fm=webp"
                    alt="Brand 15"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Brand;
