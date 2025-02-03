import Image from 'next/image'
import React from 'react'

const Introduction = () => {
    return (
        <div className='px-[7%] flex lg:flex-row flex-col items-center lg:justify-between justify-center  w-full py-[4%]'>
            <div className='w-full lg:block hidden'>
                <Image src={"/Images/intro-im.svg"} className='z-[4000] relative' width={513} height={513} alt='' />
                <div className='leave absolute'>
                </div>
            </div>
            <div className='w-full lg:justify-start justify-center'>
                <p className='lg:text-[65px] text-[50px] font-bold freeman text-white'>Introduction</p>
                <p className='monda lg:text-[22px] text-[20px] text-white text-justify lg:w-[80%]'>Just like the AIPEPE Coin, we’re here to celebrate the community and the fun that comes with memes, without the complexities of traditional utility. It’s all about being part of something exciting—whether you’re creating, sharing, or just enjoying the latest viral memes.</p>
            </div>
        </div>
    )
}

export default Introduction