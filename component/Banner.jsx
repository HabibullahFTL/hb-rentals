import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="relative h-300 sm:h-400 md:h-500 xl:h-600 2xl:700">
            <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" alt="Banner" />
            <div className="absolute top-1/2 text-center w-full">
                <p className="text-sm md:text-base lg:text-lg">Not sure where to go? Perfect.</p>
                <button className="md:text-lg bg-white px-5 md:px-8 py-2 md:py-4 mt-4 rounded-full shadow-md hover:shadow-xl active:scale-90 transform transition duration-150">I'm flexible</button>
            </div>
        </div>
    );
};

export default Banner;