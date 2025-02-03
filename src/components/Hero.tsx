import Image from 'next/image'
import React from 'react'
import Introduction from './Introduction'

const Heropage = () => {
    return (
        <div id='home' className=' overflow-hidden'>
            <div className='flex lg:flex-row flex-col lg:h-[100vh] px-[6%] items-center justify-center relative'>

                <div className='flex lg:flex-row flex-col w-full items-center'>
                    <Image src={"/Images/pepeimg1.svg"} className='lg:w-[338px] w-[140px]' width={338} height={522} alt='' />
                    <div>
                        <p className='text-white font-bold freeman lg:text-[70px] text-[50px] text-center'>AI-Driven Memes, Instant Laughter!</p>
                        <p className='text-white font-bold monda text-center lg:text-[30px] text-[20px]'>Join the meme-driven movement <br /> where humor meets innovation</p>
                    </div>
                    <Image src={"/Images/pepeimg2.svg"} className='lg:w-[529px] w-[240px]' width={529} height={589} alt='' />
                </div>
                <div className='w-full h-[63px] lg:block hidden absolute bottom-14 bg border-[1px] border-[#3ED5DD] rounded-[16px]'>
                </div>

                <Image src={"/Images/Ellipse-round.svg"} className='absolute lg:block hidden top-[400px] right-[-120px]' width={400} height={400} alt='' />
                <Image src={"/Images/star.svg"} className='absolute z-50 top-[600px] right-[1px]' width={104} height={104} alt='' />
            </div>
            <Introduction />
        </div>
    )
}

export default Heropage