import Image from 'next/image';
import React from 'react';

const SmallCard = ({ img, location, distance }) => {
    return (
        <div className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg hover:scale-105 transform cursor-pointer transition duration-200 ease-out">
            <div className='relative w-16 h-16'>
                <Image src={img} layout='fill' className='rounded-md' alt={location} />
            </div>
            <div className="">
                <h2 className="">{location}</h2>
                <h3 className="">{distance}</h3>
            </div>
        </div>
    );
};

export default SmallCard;