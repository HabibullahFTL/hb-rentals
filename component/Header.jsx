import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header className="grid grid-cols-3 sticky top-0 shadow-md bg-white p-5 md:px-10 z-50">
            {/* Left  */}
            <div className="relative flex items-center h-10 my-auto">
                <Image src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    alt="Logo" />
            </div>

            {/* Middle  */}
            <div className="flex items-center py-2 rounded-full border-2 md:shadow-sm">
                <input
                    type="text"
                    placeholder="Start your searching"
                    className="bg-transparent outline-none flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400" />
                <SearchIcon className="hidden md:inline-flex cursor-pointer md:mx-2 bg-red-400 text-white rounded-full h-8 p-2" />
            </div>

            {/* Right  */}
            <div className="flex items-center justify-end space-x-4 text-gray-600 ">
                <p className="hidden md:inline text-sm lg:text-base 2xl:text-lg  cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>
        </header>
    );
};

export default Header;