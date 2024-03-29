import Link from "next/link";
import Nav from "./iu/Nav";


const Header = () => {
  return (
    <div className="w-full h-[70px] flex justify-between items-center fixed top-0 left-0  px-[70px] z-50">
        <div>
            <Link href="/" className="text-[#FFCA64]">Logo</Link>
        </div>
        <div className="flex gap-3">
            <Nav linkStyle="text-[#90949F] tracking-[2px] hover:text-[#FFCA64] text-[13px] font-[500]"/>
        </div>
    </div>
  )
}

export default Header