import Image from 'next/image'
import React from 'react'

const Utility = () => {
    return (
        <div className='w-full mb-[10%] relative'>
            <div className='px-[7%] flex lg:flex-row flex-col  items-center justify-between w-full py-[4%]'>
                <div className='w-full'>
                    <p className='lg:text-[65px] text-[50px] font-bold freeman text-white'>No Utility, Just Memes</p>
                    <p className='monda lg:text-[22px] text-[20px] text-white text-justify lg:w-[80%]'>Similar to meme coins, the value we create comes not from practical use, but from the laughs and connections we build along the way. AI Pepe Meme thrives in the space where viral culture takes center stage, powered by your creativity and humor.</p>
                </div>
                <div className=' w-full flex lg:justify-end justify-center'>
                    <Image src={"/Images/utility.png"} className='' width={513} height={513} alt='' />

                </div>
            </div>

            <div className='flex flex-col items-center justify-center lg:mt-[10%] md:mt-[20%] mt-[50%] relative'>
                <Image src={"/Images/line.svg"} className='absolute top-[-20%] lg:block md:hidden block left-0 z-[500]' width={1046} height={307} alt='' />
                <Image src={"/Images/Ellipse22.svg"} className='absolute lg:block hidden top-[-30%] right-0 z-[500]' width={346} height={307} alt='' />

                <p className='lg:text-[70px] text-[50px] font-bold freeman text-white'>How to Buy?</p>
                <p className='text-center lg:text-[35px] text-[20px] text-white leading-[57px] monda'>Here are the steps to buy AI Pepe in <br /> simple points</p>
                <div className='lg:mt-[20%] mt-[30%] flex lg:flex-row flex-col lg:gap-0 gap-4'>
                    <div className='relative'>
                        <Image src={"Images/buyfrog1.svg"} width={233} height={132} className='absolute lg:w-[233px] top-[-8rem] right-16' alt='' />
                        <div className='cards w-[354px] h-[328px] flex flex-col items-center justify-center'>
                            <div className='w-[40px] h-[40px] rounded-full bg-[#6A9A51] items-center justify-center flex text-white font-bold'>
                                <p className='freeman'>1</p>
                            </div>
                            <p className='lg:text-[32px] text-[20px] font-bold text-white freeman'>Set up a Wallet</p>
                            <p className='text-[25px] text-white text-center monda'>Install MetaMask or <br /> Trust Wallet and add <br /> Ethereum (ETH)</p>
                        </div>
                    </div>
                    <div className='relative lg:top-[10rem] top-[11rem]'>
                        <Image src={"Images/buyfrog2.svg"} width={133} height={132} className='absolute top-[-12rem] right-[94px]' alt='' />
                        <div className='cards w-[354px] h-[328px] flex flex-col items-center justify-center'>
                            <div className='w-[40px] h-[40px] rounded-full bg-[#6A9A51] items-center justify-center flex text-white font-bold'>
                                <p className='freeman'>2</p>
                            </div>
                            <p className='text-[32px] font-bold text-white freeman'>Use a DEX</p>
                            <p className='text-[25px] text-white text-center monda'>Connect your wallet  <br /> to a decentralized  <br /> exchange.</p>
                        </div>
                    </div>
                    <div className='relative lg:top-[20rem] top-[21rem]'>
                        <Image src={"Images/buyfrog3.svg"} width={213} height={132} className='absolute top-[-11rem] right-16' alt='' />
                        <div className='cards w-[354px] h-[328px] flex flex-col items-center justify-center'>
                            <div className='w-[40px] h-[40px] rounded-full bg-[#6A9A51] items-center justify-center flex text-white font-bold'>
                                <p className='freeman'>3</p>
                            </div>
                            <p className='text-[32px] font-bold text-white freeman'>Swap ETH for AI Pepe</p>
                            <p className='text-[25px] text-white text-center monda'>Find AI Pepe using its  <br /> contract address and  <br /> swap your ETH for it.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full px-[8%] lg:mt-[35rem] mt-[25rem] relative'>
                <Image src={"/Images/line.svg"} className='absolute top-[-40%] left-0 z-[500]' width={1046} height={307} alt='' />
                <Image src={"/Images/buyfrog1.svg"} className='absolute lg:block hidden rotate-[-14.2] right-[50%] top-[-60px]' width={233} height={132} alt='' />
                <Image src={"/Images/3.svg"} className='absolute lg:block hidden right-[40px]' width={233} height={132} alt='' />
                <Image src={"/Images/Ellipse 7.svg"} className='absolute lg:block hidden top-[-60%] left-0 z-[500]' width={346} height={307} alt='' />

                <div className='flex lg:flex-row flex-col justify-between items-center text-white w-full'>
                    <div className='flex flex-col gap-6 monda lg:text-[35px] text-[20px] z-[500]'>
                        <p className='freeman font-bold lg:text-[70px] text-[50px]'>Tokenomics</p>
                        <p className='text-white'><span className='font-bold'>Total Supply:</span> Fixed token quantity.</p>
                        <p className='text-white'><span className='font-bold'>Burn Mechanism: </span> Tokens burned per <br /> transaction, increasing scarcity.</p>
                        <p className='text-white'><span className='font-bold'>Community-Driven: </span> Relies on active <br /> participation and meme culture.</p>
                        <button className='w-[206px] h-[79px] monda'>Learn More</button>
                    </div>
                    <Image src={"/Images/last.svg"} className='' width={588} height={593} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Utility