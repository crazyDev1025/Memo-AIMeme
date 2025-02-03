
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navigation = () => {
    const [active, setActive] = useState("home")
    const [menuOpen, setMenuOpen] = useState(false)

    const navs = [
        { title: "Home", act: 'home', link: "#home" },
        { title: "About", act: 'about', link: "#about" },
        { title: "Roadmap", act: 'roadmap', link: "#roadmap" },
        { title: "Tokenomics", act: 'token', link: "#tokenomics" },
    ]

    return (
        <nav className="w-full flex flex-row items-center justify-between lg:px-[6%] py-[1%] border-b-[0.5px] border-white">
            {/* Logo */}
            <Image src={"/Images/pepelogo.svg"} width={160} height={60} alt="Logo" className="w-[140px] sm:w-[160px] lg:w-[199px]" />

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-2xl">
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Navigation Links (Desktop) */}
            <div className='hidden lg:flex flex-row items-center gap-[20px]'>
                {navs.map((item, index) => (
                    <Link href={item.link}
                        key={index}
                        className={`text-[18px] lg:text-[22px] font-bold text-white cursor-pointer transition-colors ${active === item.act ? "text-[#B8DB1D]" : "hover:text-gray-400"}`}
                        onClick={() => setActive(item.act)}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>

            {/* Buy Now Button (Always Visible) */}
            <Link href={"#buy"} className='hidden lg:flex bg-[#66974C] px-5 py-3 rounded-[9px] text-white font-bold text-lg'>
                Buy Now
            </Link>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-[75px] left-0 w-full bg-[#B8DB1D] z-[50000] flex flex-col items-center py-5 space-y-4 lg:hidden">
                    {navs.map((item, index) => (
                        <div
                            key={index}
                            className={`text-xl font-bold text-white cursor-pointer ${active === item.act ? "text-[#B8DB1D]" : "hover:text-gray-400"}`}
                            onClick={() => {
                                setActive(item.act)
                                setMenuOpen(false) // Close menu after selection
                            }}
                        >
                            {item.title}
                        </div>
                    ))}
                    <button className='bg-[#66974C] px-6 py-3 rounded-lg text-white font-bold text-lg'>
                        Buy Now
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navigation
