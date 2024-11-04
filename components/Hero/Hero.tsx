import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='flex'>
        <div className='flex flex-col w-1/2 ml-44 mt-[316px] gap-7 h-[80%]'>
        <h1 className='w-[496px] h-[189px]   font-bold text-[40px] leading-[65.8px] tracking-[2.5%]'>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className='w-[902px] h-[147px] font-medium text-[30px] leading-[49.35px] tracking-[2.5%] text-start'>
        An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our
         desirable collection.
        </p>
        <button className='bg-[#A29875] w-[288px] h-[58px] rounded-[10px] p-[10px] gap-[10px] font-medium text-[30px] text-[#FFFFFF] text-center'>
            Explore Now
        </button>
        </div>
        <div className='w-1/2 mt-[198px] ml-[84px] '>
        <Image 
        src={"img.svg"}
        alt='model picture'
        width={490}
        height={667}/>
        </div>
    </div>
  )
}

export default HeroSection