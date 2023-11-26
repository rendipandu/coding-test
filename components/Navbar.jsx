"use client"
import Link from "next/link"
import Image from "next/image"
import profile from "../public/pokeball.png"
import { useState } from "react"
import { profileLinks, searchLinks } from "@/constants"

const Nav = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    const [active2, setActive2] = useState('');
    const [toggle2, setToggle2] = useState(false);

    return (
        <nav className="navbar">
            <Link href="/">
                <p className="logo_text">developedbyren</p>
            </Link>

            <div className="flex gap-3 md:gap-5 items-center">
                <div className="flex flex-1 justify-end items-center">
                    <p className="text-gray-400 cursor-pointer hover:text-white" onClick={() => setToggle2(!toggle2)}>Search</p>
                    <div className={`${toggle2 ? 'flex' : 'hidden'} p-6 bg-slate-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex flex-col gap-6'>
                            {searchLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active2 === link.title
                                        ? " text-white"
                                        : "text-gray-500"
                                        } hover:text-white font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle2(!toggle2);
                                        setActive2(link.title);
                                    }}
                                >
                                    <Link href={`search/${link.id}`}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="flex flex-1 justify-end items-center">
                    <Image
                        src={profile}
                        alt="Profile"
                        width={37}
                        height={37}
                        className="rounded-full cursor-pointer object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-slate-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex flex-col gap-6'>
                            {profileLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title
                                        ? " text-white"
                                        : "text-gray-500"
                                        } hover:text-white font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;