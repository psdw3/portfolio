import Image from 'next/image'
import profile2 from "../../public/profile2.jpg"



const Images = () => {
    return ( <Image src={profile2} alt="profile" width={300} height={300} className="cover"/>);
}
 
export default Images