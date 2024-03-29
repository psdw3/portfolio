import Link from "next/link";

const header = [
    {
        name: "HOME",
        path: "/",
    },
    {
        name: "ABOUT",
        path: "/about",
    },
    {
        name: "PROJECT",
        path: "/project",
    },
    {
        name: "CONTACT",
        path: "/contact",
    },
];

const Nav = ({linkStyle}) => {
    return (
        <div className="flex gap-6">
            {header.map((nav, index) => (
                <Link key={index} href={`${nav.path}`} className={linkStyle}>
                    {nav.name}
                </Link>
            ))}
        </div>
    );
};

export default Nav;