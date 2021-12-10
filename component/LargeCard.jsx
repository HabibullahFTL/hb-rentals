import Image from 'next/image';
import React from 'react';

const LargeCard = ({ img, title, description, buttonText }) => {
    return (
        <section className='relative mt-12 text-gray-700 cursor-pointer'>
            <div className="relative h-96 min-w-300px">
                <Image src={img} alt={title} layout='fill' objectFit='cover' className='rounded-xl' />
            </div>
            <div className="absolute top-12 left-14 w-64 space-y-4">
                <h2 className="text-4xl font-semibold">{title}</h2>
                <p className="font-medium text-lg">{description}</p>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:shadow-lg active:scale-95 transform transition duration-150">{buttonText}</button>
            </div>
        </section>
    );
};

export default LargeCard;