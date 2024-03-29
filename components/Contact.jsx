"use client"

import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className='w-full py-[160px] bg-[#161C22]'>
        <div className='w-[900px] m-auto flex justify-between items-center'>
            <div className='flex flex-col gap-16 w-[350px]'>
                <input type="text" placeholder='Name' className='bg-[#fff0] border-b-[1px] border-[#fff6] outline-none'/>
                <input type="text" placeholder='Email'className="bg-[#fff0] border-b-[1px] border-[#fff6] outline-none"/>
                <textarea cols="30" rows="10" placeholder='Share your thoughts' className="bg-[#fff0] border-b-[1px] border-[#fff6] outline-none h-[30px] max-h-[200px]"></textarea>
                <button className="bg-[#FFCA64] text-[#161C22] py-2 hover:bg-[#ffc052]">SHARE YOUR FEEDBACK</button>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col text-[45px] text-[#FFCA64] tracking-[10px] font-[600]">
                    CONTACT
                    <span className="flex items-center justify-between text-[#FFCA64]">
                        <hr className="w-[150px] h-[2px] bg-[#FFCA64] border-0"/> US
                    </span>
                </div>
                <div className="flex gap-4"><FaPhone/> +976 89282003</div>
                <div className="flex gap-4"><MdEmail/> daynjawmunkhtuguldur@gmail.com</div>
                <div className="flex gap-4"><MdLocationOn/> Mongolia/Sainshand</div>
            </div>
        </div>
    </div>
  )
}

export default Contact