'use client'
import React, { useState } from "react"
import { BsChevronBarRight } from 'react-icons/bs'
import { MdWifiTethering, MdHomeFilled, MdLiveTv, MdCardTravel } from 'react-icons/md'
import Link from 'next/link';
import { useSideModal } from "./contextprovider";

export default function SideModal() {
    const [isOpen, setIsOpen] = useState(false);
    const { setLiveId } = useSideModal();

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        const match = inputValue.match(/[?&]v=([a-zA-Z0-9_-]+)/);

        if (match) {
            const videoId = match[1];
            setLiveId(videoId);
            setInputValue('');
        }
    };

    return (
        <aside className="fixed h-full w-full lg:w-0 top-0">
            <main className={`fixed h-full flex top-0 items-center text-white ${isOpen ? "left-[0]" : "-left-72"} transition-all`}>
                <section className={`h-full w-72 flex flex-col justify-between p-3 bg-zinc-950 shadow-lg shadow-black`}>
                    <form className='flex space-x-2 h-10 w-full text-black' onSubmit={handleSubmit}>
                        <input
                            type="url"
                            pattern="^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}$"
                            required
                            className="rounded-sm w-full p-2 font-bold outline-0"
                            onChange={handleInputChange}
                            placeholder='Cole o Link aqui Ex: https://www.youtube.com/watch?v=dWlwqkE3YGA&t'
                        />
                        <button type='submit' className="bg-purple-500 rounded-sm text-white p-2 px-4 items-center text-lg">
                            <MdWifiTethering />
                        </button>
                    </form>

                    <select className="rounded-sm w-full p-2 text-white bg-zinc-950 border border-purple-500 outline-none">
                        <option value="twitchChat">Twitch Chat</option>
                        <option value="twitter">Cooming Soon</option>
                    </select>
                    <nav className="flex flex-col justify-center gap-10">
                        <Link href="/" >
                             <span className="text-2xl text-white hover:text-purple-500 flex items-center space-x-2"><MdHomeFilled /> <p>Home</p></span>
                        </Link>
                        <Link href="/live">
                        <span className="text-2xl text-white hover:text-purple-500 flex items-center space-x-2"><MdLiveTv /> <p>Live</p></span>
                        </Link>
                        <Link href="/profile">
                        <span className="text-2xl text-white hover:text-purple-500 flex items-center space-x-2"><MdCardTravel /> <p>Cartinhas</p></span>
                        </Link>
                    </nav>
                    <div className="w-10">
                        <img src="keydlogo.webp" className="object-scale-down" alt="" />
                    </div>
                </section>
                <button onClick={toggleModal} className={`h-32 w-8 text-white text-3xl bg-purple-500 transition-all hidden lg:block rounded-tr-md rounded-br-md ${isOpen ? "" : "opacity-30 transform -translate-x-4 hover:translate-x-0 hover:opacity-100"}`}>
                    <BsChevronBarRight className={isOpen ? "transform rotate-180" : ""} />
                </button>
            </main>
        </aside>

    )
}
