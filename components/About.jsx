"use client"
import Image from './iu/Image'



const About = () => {
    return (
    <div className="w-full min-h-screen bg-[#161C22] py-[120px]">
        <div className="w-[900px] m-auto my-auto">
            {/* top */}
            <div className="flex justify-between" data-aos="fade-right">
                {/* left */}
                <div className="flex flex-col">
                    <Image alt='portfolio'/>
                </div>

                {/* right */}
                <div className="flex flex-col max-w-[500px] gap-10">
                    <span className="flex gap-3 items-center">
                        <hr className="w-[25px] h-[1px] border-0 bg-[#FFCA64] "/>
                        <h1 className="text-[#FFCA64] text-[18px] font-[500] tracking-[5px]">ABOUT ME</h1>
                    </span>
                    <span className="text-[15px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odit molestiae libero officiis vitae harum, dicta nihil 
                        aspernatur molestias eius ex. Lorem ipsum dolor sit amet 
                        consectetur, adipisicing elit. Accusamus, expedita?
                    </span>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam autem incidunt laboriosam exercitationem ipsum.</span>
                    <span className="flex gap-12">
                        <button className="bg-[#FFCA64] text-[#161C22] text-[13px] font-[500] px-[20px] py-[8px]">HIRE ME</button>
                        <button className="bg-[#FFCA64] text-[#161C22] text-[13px] font-[500] px-[20px] py-[8px]">CONTACT US</button>
                    </span>
                </div>
            </div>


            {/* bottom */}
            <div className="flex flex-col mt-[100px]">
                <div className="text-[#FFCA64] flex gap-4 items-center font-[500] tracking-[5px] text-[17px]">MY SKILLS <hr className="w-[30px] h-[1px] border-0 bg-[#FFCA64]"/></div>
                <div className="flex justify-between flex-wrap mt-[20px]">
                    <div className="w-[40%] h-[50px] flex flex-col gap-4 mb-[20px]">
                        <div className="flex justify-between">
                            <span>UI UX DESIGN</span>
                            <span>34%</span>
                        </div>
                        <span className="flex relative w-full bg-[#010206] h-[5px] rounded-[5px] truncate">
                            <span className="absolute top-0 left-0 w-[34%] bg-[#FFCA64] h-[5px]"></span>
                        </span>
                    </div>

                    <div className="w-[40%] h-[50px] flex flex-col gap-4 mb-[20px]">
                        <div className="flex justify-between">
                            <span>WEB DEVELOPMENT</span>
                            <span>65%</span>
                        </div>
                        <span className="flex relative w-full bg-[#010206] h-[5px] rounded-[5px] truncate">
                            <span className="absolute top-0 left-0 w-[65%] bg-[#FFCA64] h-[5px]"></span>
                        </span>
                    </div>

                    <div className="w-[40%] h-[50px] flex flex-col gap-4 mb-[20px]">
                        <div className="flex justify-between">
                            <span>APP DEVELOPMENT</span>
                            <span>0%</span>
                        </div>
                        <span className="flex relative w-full bg-[#010206] h-[5px] rounded-[5px] truncate">
                            <span className="absolute top-0 left-0 w-[0%] bg-[#FFCA64] h-[5px]"></span>
                        </span>
                    </div>

                    <div className="w-[40%] h-[50px] flex flex-col gap-4  mb-[20px]">
                        <div className="flex justify-between">
                            <span>SLEEP</span>
                            <span>100%</span>
                        </div>
                        <span className="flex relative w-full bg-[#010206] h-[5px] rounded-[5px] truncate">
                            <span className="absolute top-0 left-0 w-[100%] bg-[#FFCA64] h-[5px]"></span>
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default About;