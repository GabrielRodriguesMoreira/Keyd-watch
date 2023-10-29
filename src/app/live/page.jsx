'use client'
import YouTube from 'react-youtube';
import React, { useState, useEffect, useRef } from 'react'
import IconWithTooltip from '../componenets/iconwithtooltip';
import { MdWifiTethering, MdVolumeUp, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdPlayArrow, MdPause, MdSwapHoriz, MdFullscreen, MdOutlineSubtitles } from 'react-icons/md'
import Cookies from 'js-cookie';
import TwitterTimeline from '../componenets/twitter';
import Loading from './loading';
export default function Live() {

    const [swapScreen, setSwapScreen] = useState(false)
    const [liveId, setliveId] = useState(null)
    const [player, setPlayer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [chat, setChat] = useState(null)

    useEffect(() => {
        if (Cookies.get('liveIdCookie')) {
            setliveId(Cookies.get('liveIdCookie'))
        }

        const chatSelect = document.getElementById('chatSelect');

        chatSelect.addEventListener('change', setChatCallBack);
        setChat(chatSelect.value);

        //selectChat
        const currentchat = localStorage.getItem('currentchat');
        if (currentchat) {
            setChat(currentchat);
        }

        return () => {
            chatSelect.removeEventListener('change', setChatCallBack);
        };

    }, []);

    const opts = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            cc_load_policy: 1,
            cc_lang_pref: 'en',
        },
    };

    const onReady = (event) => {
        setPlayer(event.target);
        console.log(event.target);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        if (player) {
            player.setVolume(newVolume);
        }
    };

    const togglePlayPause = () => {
        if (player) {
            if (isPlaying) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const seekTime = (num) => {
        if (player) {
            const currentTime = player.getCurrentTime();
            player.seekTo(currentTime + num, true);
        }
    };

    const toggleSubTitle = () => {
        if (player) {
            const playerState = player.getOption('captions', 'track');
            const newPlayerState = playerState === 'off' ? 'on' : 'off';
            player.setOption('captions', 'track', newPlayerState);
        }
    };


    const toggleFullScreen = () => {
        if (player) {
            const iframe = player.getIframe();
            if (iframe) {
                if (iframe.requestFullscreen) {
                    iframe.requestFullscreen();
                } else if (iframe.mozRequestFullScreen) {
                    iframe.mozRequestFullScreen();
                } else if (iframe.webkitRequestFullScreen) {
                    iframe.webkitRequestFullScreen();
                }
            }
        }
    };

    function sendLiveId() {
        event.preventDefault();

        const element = document.getElementById("liveIdInput");
        const elementValue = element.value;

        const videoId = elementValue.slice(-11);
        setliveId(videoId);
        Cookies.set('liveIdCookie', videoId, { expires: 0.5 });
        element.value = '';

    }

    function setChatCallBack(event) {
        const currentchat = event.target.value;

        const existingValue = localStorage.getItem('currentchat');

        if (existingValue) {
            localStorage.setItem('currentchat', currentchat);
        } else {
            localStorage.setItem('currentchat', currentchat);
        }

        setChat(currentchat);
    }


    return (

        <main className="flex flex-col w-full lg:h-screen lg:grid lg:grid-cols-12 lg:grid-rows-10 p-2 lg:pl-4 gap-2 space-y-4 lg:space-y-0">
            <div className={`w-full ${swapScreen ? "col-start-10 row-start-1 col-span-3 row-span-3" : "col-start-1 row-start-1 col-span-9 row-span-9"} rounded-md `} >
                <div className='w-full rounded-md aspect-video '>
                    {
                        liveId ?
                            <YouTube className='w-full h-full' iframeClassName='w-full h-full' videoId={liveId} opts={opts} onReady={onReady} />
                            :
                            <div className="w-full h-full relative flex  text-black p-3 pb-0" >
                                <div className='absolute top-0 left-0 w-full h-full pointer-events-none' style={{ boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)' }}></div>
                                <div className='h-full w-fit'>
                                    <img className='h-full object-scale-down' src="modelo.webp" alt="" />
                                </div>
                                <form onSubmit={sendLiveId} className='flex space-x-2 flex-1 h-10'>
                                    <input
                                        type="url"
                                        pattern="^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}$"
                                        required
                                        id="liveIdInput"
                                        className="rounded-sm w-full p-2 font-bold outline-0"
                                        placeholder='Cole o Link aqui Ex: https://www.youtube.com/watch?v=dWlwqkE3YGA&t'
                                    />
                                    <button type='submit' className="bg-red-700 rounded-sm text-white p-2 items-center text-lg">
                                        <MdWifiTethering />
                                    </button>
                                </form>




                                <img className=' absolute top-0 left-0 h-full w-full object-fill -z-10' style={{ filter: 'blur(5px)' }} src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/cec05074314395.5fee3376b0b81.jpg" alt="" />
                            </div>
                    }

                </div>
            </div>
            <div className=" flex-wrap p-1 items-start justify-center lg:justify-between gap-2 px-2 lg:space-y-0 w-full row-start-10 col-span-9 text-white lg:text-xl hidden lg:flex" >

                <div className='flex justify-center items-center space-x-1 cursor-pointer order-1 mr-10 lg:ml-0 group'>
                    <button onClick={() => { document.getElementById("range_input").value = 0 }}>
                        <IconWithTooltip icon={<MdVolumeUp />} text="volume" />
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        id='range_input'
                        className='range_input_style lg:opacity-0 group-hover:opacity-100'
                        onChange={handleVolumeChange}
                    />
                </div>

                <div className='text-xl lg:text-3xl space-x-4 lg:order-2'>
                    <button onClick={() => seekTime(-5)}>
                        <IconWithTooltip icon={<MdKeyboardDoubleArrowLeft />} text="Rewind -5" />
                    </button>
                    <button onClick={() => seekTime(-1)}>
                        <IconWithTooltip icon={<MdKeyboardArrowLeft />} text="Rewind -1" />
                    </button>
                    <button onClick={togglePlayPause}>
                        <IconWithTooltip
                            icon={isPlaying ? <MdPause /> : <MdPlayArrow />}
                            text={isPlaying ? "Pause" : "Play"} />
                    </button>
                    <button onClick={() => seekTime(1)}>
                        <IconWithTooltip icon={<MdKeyboardArrowRight />} text="Forward +1" />
                    </button>
                    <button onClick={() => seekTime(5)}>
                        <IconWithTooltip icon={<MdKeyboardDoubleArrowRight />} text="Forward +5" />
                    </button>
                </div>

                <div className='space-x-4 order-3'>
                    <button onClick={toggleFullScreen}>
                        <IconWithTooltip icon={<MdFullscreen />} text="Full Screen" />
                    </button>
                    <button onClick={toggleSubTitle}>
                        <IconWithTooltip icon={<MdOutlineSubtitles />} text="Subtitles" />
                    </button>
                    <button onClick={() => setSwapScreen(!swapScreen)}>
                        <IconWithTooltip icon={<MdSwapHoriz />} text="Swap Screens" />
                    </button>
                </div>

            </div>

            <div className={`w-full ${swapScreen ? "col-start-1 row-start-1 col-span-9 row-span-9" : "col-start-10 row-start-1 col-span-3 row-span-3"} overflow-hidden rounded-md`}>
                <iframe
                    className="w-full aspect-video rounded-md"
                    src="https://player.twitch.tv/?channel=patopapao&amp;enableExtensions=false&amp;parent=twitch.tv&amp;quality=auto&amp;volume=1&amp;parent=pain-watch.vercel.app" type="text/html" allowFullScreen
                ></iframe>
            </div>

            < div className=" w-full col-start-10 col-span-3 row-start-4 row-span-7 rounded-md overflow-y-auto ">
                {chat === 'twitchChat' ? (
                    <iframe
                        className='w-full h-full min-h-[550px] lg:min-h-0'
                        src="https://www.twitch.tv/embed/patopapao/chat?&darkpopout&amp;enableExtensions=false&amp;parent=twitch.tv&amp;parent=pain-watch.vercel.app"
                        type="text/html"
                    ></iframe>
                ) : chat === 'twitter' ? (
                    <div>
                        <TwitterTimeline />
                    </div>
                ) : null}

            </div>
        </main >
    )
}