import Image from 'next/image'
import React from 'react'

const Roadmap = () => {
    return (
        <div id='roadmap' className='flex flex-col w-full '>
            <Image src={"/Images/line.svg"} className='absolute top-[190%] z-[500]' width={1046} height={307} alt='' />
            <div className='w-full bg-[#66974C] lg:px-0 px-[8%] lg:h-[120vh] pt-[4%] pb-[6%] relative'>
                <div className='flex items-center justify-center flex-col gap-4'>
                    <p className='lg:text-[70px] text-[50px] freeman text-white'>Roadmap</p>
                    <div className='roadmap lg:w-[1117px] h-[476px] lg:px-0 px-5 flex items-center justify-center relative border-[#60EA17] border-[0.6px]'>
                        <Image src={"/Images/roadmap.svg"} width={157} className='absolute right-1 top-[-180px]' height={259} alt='' />
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row items-center gap-3'>
                                <div className='w-[40] h-[40] rounded-full bg-[#20672C] font-bold flex items-center justify-center text-white'>1</div>
                                <div className='lg:w-[90.77px] w-[70px] h-[0.99px] bg-white'></div>
                                <p className='monda lg:text-[28px] text-[20px] text-white'>Token launch and market listing on aggregators</p>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                <div className='w-[40] h-[40] rounded-full bg-[#20672C] font-bold flex items-center justify-center text-white'>2</div>
                                <div className='lg:w-[90.77px] w-[70px] h-[0.99px] bg-white'></div>
                                <p className='monda lg:text-[28px] text-[20px] text-white'>Community growth with digital newsletters, Discord <br /> groups, and listing on centralized exchanges.</p>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                <div className='w-[40] h-[40] rounded-full bg-[#20672C] font-bold flex items-center justify-center text-white'>3</div>
                                <div className='lg:w-[90.77px] w-[70px] h-[0.99px] bg-white'></div>
                                <p className='monda lg:text-[28px] text-[20px] text-white'>Merchandise release and development of <br /> additional tools for the community.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={"/Images/frogmap.svg"} width={350} height={300} className='absolute bottom-0 lg:block hidden ' alt='' />
                <Image src={"/Images/footsteps.svg"} width={750} height={300} className='absolute bottom-0 right-0 lg:block hidden' alt='' />

            </div>
        </div>
    )
}

export default Roadmap