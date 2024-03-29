"use client"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTelegramPlane } from "react-icons/fa"


const icons = [
    {
        name: <FaInstagram/>,
        path: "/"
    },
    {
        name: <FaFacebook/>,
        path: "/"
    },
    {
        name: <FaTwitter/>,
        path: "/"
    },
    {
        name: <FaYoutube/>,
        path: "/"
    },
    {
        name: <FaTelegramPlane/>,
        path: "/"
    }
]

const Social = ({containerStyle, linkStyle}) => {
  return (
    <div className={containerStyle}>
        {icons.map((icon, index) => {
            return (
                <Link className={linkStyle} href={icon.path} key={index}>{icon.name}</Link>
            )
        })}
    </div>
  )
}

export default Social