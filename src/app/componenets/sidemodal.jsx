'use client'
import React, { useState, useRef, useEffect } from "react"
import { BsChevronBarRight } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { BiLogOut } from 'react-icons/bi'
import Link from 'next/link';

export default function SideModal() {

    const [isOpen, setIsOpen] = useState(false)

    function toggleModal() {
        setIsOpen(!isOpen)
    }

    return (
        <aside className="fixed h-full w-full lg:w-0 top-0 "
        >
            <main
                className={`fixed h-full flex top-0 items-center text-white ${isOpen ? "left-[0]" : "-left-72"} transition-all `}
            >
                <section
                    className={`h-full w-72 flex flex-col space-y-12 p-3 bg-gray-950 shadow-lg shadow-black`}
                >
                    <div >
                        <select className="text-black">
                            <option value="twitchChat">Twitch Chat</option>
                            <option value="twitter">Twitter</option>
                        </select>

                    </div>

                    <nav className="flex flex-col justify-center gap-10">
                        <Link href="/"> 
                            <span>Home</span>
                        </Link>
                        <Link href="/live"> 
                            <span>Live</span>
                        </Link>
                        <Link href="/profile"> 
                            <span>Profile</span>
                        </Link>
                    </nav>

                    <div className="w-10 ">
                        <img src="painlogo.png" className="object-scale-down" alt="" />
                    </div>
                </section>

                <button onClick={toggleModal}
                    className={`h-32 w-8 text-white text-3xl bg-red-700 transition-all hidden lg:block rounded-tr-md rounded-br-md ${isOpen ? "" : "opacity-30 transform -translate-x-4 hover:translate-x-0 hover:opacity-100"}`}
                >
                    <BsChevronBarRight className={isOpen ? "transform rotate-180" : ""} />
                </button>
                
            </main>
        </aside>
    )
}