'use client'
import React, { useState, useRef, useEffect } from "react"
import { initializeApp } from "firebase/app";
import { BsChevronBarRight } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { BiLogOut } from 'react-icons/bi'
import {
    GoogleAuthProvider,
    getAuth,
    setPersistence,
    browserLocalPersistence,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';

import Link from 'next/link';
export default function SideModal() {

    const [user, setUser] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null);

    require('dotenv').config();
    const apiKey = process.env.NEXT_PUBLIC_CHAT_KEY;

    const firebaseConfig = {
        apiKey: apiKey,
        authDomain: "redchat-a7b6a.firebaseapp.com",
        projectId: "redchat-a7b6a",
        storageBucket: "redchat-a7b6a.appspot.com",
        messagingSenderId: "979135552831",
        appId: "1:979135552831:web:e1499574cf69813754c78a",
        measurementId: "G-R8FR83FBGZ"
    };

    useEffect(() => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
        });

        const currentchat = localStorage.getItem('currentchat');
        if (currentchat) {
            document.getElementById("chatSelect").value = currentchat
        }

        return () => {
            unsubscribe();
        };
    }, []);

    const provider = new GoogleAuthProvider();
    const SignIn = () => {
        const auth = getAuth();
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                return signInWithPopup(auth, provider);
            })
            .then((result) => {
                const authUser = result.user;
                setUser(authUser);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    };

    function logOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    function toggleModal() {
        setIsOpen(!isOpen)
    }

    function handleTouchStart(event) {
        containerRef.current.touchStartX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        if (!containerRef.current.touchStartX) {
            return;
        }

        const touchCurrentX = event.touches[0].clientX;
        const touchXDelta = touchCurrentX - containerRef.current.touchStartX;
        if (Math.abs(touchXDelta) > 50) {
            if (touchXDelta > 0) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
            containerRef.current.touchStartX = null;
        }
    }

    return (
        <aside className="fixed h-full w-full lg:w-0 top-0 "
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >

            <main
                className={`fixed h-full flex top-0 items-center text-white ${isOpen ? "left-[0]" : "-left-72"} transition-all `}
            >
                <section
                    className={`h-full w-72 flex flex-col space-y-12 p-3 bg-gray-950 shadow-lg shadow-black`}
                >

                    {user ?
                        <div className="flex items-start justify-between font-bold text-lg border-b-2 border-gray-700 pb-3">
                            <div className="flex h-12 space-x-2">
                                <img src={user.photoURL} className="rounded-full object-scale-down"></img>
                                <div>
                                    <p>{user.displayName}</p>
                                    <p className="text-green-500 font-mono">Online</p>
                                </div>

                            </div>

                            <button onClick={logOut} className="flex bg-red-700 h-full rounded-md p-1 items-center justify-center"> < BiLogOut /> </button>
                        </div>
                        :
                        <button onClick={SignIn} className="flex text-white bg-red-700 rounded-md items-center justify-center space-x-2 p-4 text-xl font-bold">
                            <FcGoogle className="text-3xl" />
                            <p>Entrar com Google</p>
                        </button>
                    }

                    <div >
                        <select className="text-black" id="chatSelect" onChange={()=>{console.log(document.getElementById('chatSelect').value)}}>
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
SideModal.displayName = 'SideModal';