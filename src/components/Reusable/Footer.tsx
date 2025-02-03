import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='h-[50vh] bg-[#66974C] relative flex items-center justify-center'>
                <div className='flex flex-col gap-4 items-center text-white'>
                    <p className='monda text-[27px]'>Contact Us</p>
                    <p className='text-[70px] freeman '>Got questions?</p>
                    <p className='monda text-[27px]'>We'd love to hear from you.</p>
                    <div className='flex flex-row items-center gap-1'>
                        <p className='monda text-[27px]'>Reach out to us on:</p>
                        <Image src={"/Images/x.svg"} width={35} height={35} alt='' />
                    </div>
                </div>
                <Image src={"/Images/footerpepe.svg"} className='absolute left-3 bottom-[-30px]' width={300} height={300} alt='' />
            </div>
            <div className='h-[10vh] flex items-center justify-center '>
                <p className='text-white text-[27px] monda'>©Aipepe2025. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer