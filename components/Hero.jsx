"use client"
import React from 'react'
import Social from './Social'
import Image from "next/image"
import profile from "../public/profile3.jpg"

const Hero = () => {
  return (
    <div className=' w-full h-screen relative'>
      <div className='w-[900px] m-auto mt-[200px] flex justify-between max-[920px]:w-full'>
        <div className='max-w-[500px] flex flex-col gap-6 max-[900px]:flex-wrap'>
          <span className='flex gap-4 text-[13px] font-[500] text-[#ffc964bb] tracking-[10px]'>
            <hr className='bg-[#FFCA64] w-[25px] h-[1px] border-0 mt-[10px]'/>
            HELLO
          </span>
          <h1 className='text-[40px] text-[#fff] font-[700] tracking-[1px]'>I&apos;m <span className='text-[#FFCA64]'>Munkhtuguldur</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam mollitia saepe molestiae nihil, amet tenetur minima quae repellat quia.</p>
          <div><button className='bg-[#ffc964bb] py-[5px] px-[20px] w-auto text-[#191D28] text-[13px] tracking-[2px] mt-[20px] font-[600] hover:scale-[1.05] transition-all'>DOWNLOAD CV</button></div>
        </div>
        <div>
          <Image src={profile} alt='profile' width={300}/>
        </div>
      </div>
      <div className='absolute left-[70px] bottom-[50px]'>
        <Social containerStyle="flex gap-4" linkStyle="text-[#90949F] text-[17px] hover:text-[#FFCA64]" />
      </div>
    </div>
  )
}

export default Hero