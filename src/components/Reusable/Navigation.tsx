'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Navigation = () => {
    const [active, setActive] = useState("home")
    const navs = [
        {
            title: "Home",
            act: 'home'
        },
        {
            title: "About",
            act: 'about'
        },
        {
            title: "Roadmap",
            act: 'roadmap'
        },
        {
            title: "Tokenomics",
            act: 'token'
        },
    ]
    return (
        <div className="w-full flex flex-row items-center justify-between lg:px-[6%] py-[1%] border-b-[0.5px] border-white">
            <Image src={"/Images/pepelogo.svg"} width={199} height={76} alt='' />
            <div className='flex flex-row items-center gap-[29px]'>
                {
                    navs.map((item, index) => (
                        <div key={index} className={`lg:text-[27px] font-bold text-white ${active === item.act ? "text-[#B8DB1D]" : ""}`}>{item.title}</div>
                    ))
                }
            </div>
            <button className='bg-[#66974C] w-[158px] h-[58px] rounded-[9px] flex items-center justify-center monda text-white'>
                Buy Now
            </button>
        </div>
    )
}

export default Navigation