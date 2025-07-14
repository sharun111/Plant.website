'use client';

import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-green-950 fixed w-full top-0 left-0 z-50 xxl:h-[100] lg:h-[100]">
            <nav className="flex items-center justify-between h-16 sm:h-20 px-4 md:px-8 lg:px-16 lg:-mt-7">
                {/* Logo */}
                <div className="text-white font-Lobster text-xl sm:text-2xl xxl:mt-20 xxl:ml-20 xxl:text-5xl xl:mt-20 lg:mt-20">
                    IndorePlants.
                </div>

                {/* Navigation Menu */}
                <div
                    className={`
            fixed top-0 ${menuOpen ? 'left-0' : 'left-[-110%]'} 
            h-full w-full bg-green-950/90 backdrop-blur-sm 
            flex flex-col items-center justify-center 
            transition-all duration-300 ease-in-out 
            lg:static lg:flex lg:flex-row lg:bg-transparent lg:backdrop-blur-none lg:left-0 lg:h-auto lg:w-auto
          `}
                >
                    {/* Close button (only mobile) */}
                    <div
                        className="absolute top-4 right-4 text-white text-2xl cursor-pointer lg:hidden"
                        onClick={() => setMenuOpen(false)}
                    >
                        <i className="ri-close-line"></i>
                    </div>

                    {/* Nav links */}
                    <ul className="flex flex-col lg:flex-row gap-8  text-white text-lg xxl:p-20 mt-20 xxl:mt-20 xxl:text-3xl xxl:mr-30">
                        {['Home', 'About', 'Popular', 'Review'].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="hover:text-green-400 transition-all"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
                        <img src="/leaf.1.png" alt="leaf1 " className="w-32" />
                    </div>
                    <div className="absolute -top-5 -left-8 rotate-180 opacity-90 lg:hidden">
                        <img src="/leaves.png" alt="" className="w-32" />
                    </div>
                </div>

                {/* Hamburger Menu Icon (mobile only) */}
                <div
                    className="text-white text-2xl cursor-pointer lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className="ri-menu-4-line"></i>
                </div>
            </nav>
        </header>
    );
}
