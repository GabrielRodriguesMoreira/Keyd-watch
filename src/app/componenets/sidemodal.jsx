'use client'
import React, { useState } from "react"
import { BsChevronBarRight } from 'react-icons/bs'
import { MdWifiTethering, MdHomeFilled, MdLiveTv, MdListAlt } from 'react-icons/md'
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
        <aside className={` fixed h-full w-80 flex items-center ${isOpen ? "left-[0]" : "-left-72"} transition-all`}>
            <section className={`h-full w-72 flex flex-col justify-between p-3 bg-zinc-950 shadow-lg shadow-black`}>

                {/* Input busca live */}
                <form className='flex space-x-2 h-10 w-full text-black' onSubmit={handleSubmit}>
                    <input
                        type="url"
                        pattern="^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}$"
                        required
                        className="rounded-sm w-full p-2 font-bold outline-0"
                        onChange={handleInputChange}
                        value={inputValue}
                        placeholder='Cole o Link aqui Ex: https://www.youtube.com/watch?v=dWlwqkE3YGA&t'
                    />
                    <button type='submit' className="bg-purple-800 rounded-sm text-white p-2 px-4 items-center text-lg">
                        <MdWifiTethering />
                    </button>
                </form>

                {/* Link do cblol */}
                <div onClick={() => { window.open('https://www.youtube.com/@CBLOL', '_blank') }} className="w-full rounded-full cursor-pointer flex items-center gap-2 p-2 bg-zinc-900 hover:bg-zinc-800">
                    <img
                        src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/17518/cblollogosymboloffwhite300x300__L.jpg"
                        className="w-7 h-7   rounded-full object-cover"
                        alt="CBLOL Channel Logo"
                    />
                    <p className="text-white text-md font-bold">CBLOL Channel</p>
                </div>

                {/* Links de navegação */}
                <nav className="flex flex-col justify-center gap-10 py-10 ">
                    <Link href="/" >
                        <span className="text-2xl text-white hover:text-purple-800 flex items-center space-x-2"><MdHomeFilled /> <p>Home</p></span>
                    </Link>
                    <Link href="/live">
                        <span className="text-2xl text-white hover:text-purple-800 flex items-center space-x-2"><MdLiveTv /> <p>Live</p></span>
                    </Link>
                    <Link href="/tabela">
                        <span className="text-2xl text-white hover:text-purple-800 flex items-center space-x-2"><MdListAlt /> <p>Tabela</p></span>
                    </Link>
                </nav>

                {/* Select de Troca chat */}
                <select className="rounded-sm w-full p-2 text-white bg-zinc-950 border border-purple-800 outline-none">
                    <option value="twitchChat">Twitch Chat</option>
                    <option value="twitter">Cooming Soon</option>
                </select>

                {/* Logo */}
                <div className="w-10">
                    <img src="keydlogo.webp" className="object-scale-down" alt="" />
                </div>
            </section>

            {/* Botão abrir a sidebar */}
            <button onClick={toggleModal} className={`h-32 w-8 text-white text-3xl bg-purple-800 transition-all hidden lg:block rounded-tr-md rounded-br-md ${isOpen ? "" : "opacity-50 transform -translate-x-4 hover:translate-x-0 hover:opacity-100"}`}>
                <BsChevronBarRight className={isOpen ? "transform rotate-180" : ""} />
            </button>

        </aside>
    )
}
