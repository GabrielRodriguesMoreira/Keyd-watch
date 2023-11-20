'use client'
import React, { useEffect, useState } from 'react'
import IconWithTooltip from '../componenets/iconwithtooltip'
import {
    MdVolumeUp,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight,
    MdPlayArrow,
    MdPause,
    MdFilter1,
    MdFilter2,
    MdFilter3,
    MdFullscreen,
    MdOutlineSubtitles
} from 'react-icons/md'
import { useSideModal } from '../componenets/contextprovider'
import YouTube from 'react-youtube';
import DisqusComments from '../componenets/disqus'

export default function Live() {

    const [swapScreen, setSwapScreen] = useState({
        ytScreen: ' col-start-1 row-start-1 col-span-9 row-span-9',
        twScreen: ' col-start-10 row-start-1 col-span-3 row-span-3',
        third: '',
        controls: ' col-span-9',
    })
    const [player, setPlayer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMobile, setIsMobile] = useState(0);
    const { liveId } = useSideModal();
    const { acompanhamento } = useSideModal();

    const opts = {
        playerVars: {
            autoplay: 1,
            controls: isMobile,
        },
    };

    useEffect(() => {
        if (window.innerWidth <= 700) {
            setIsMobile(1)
        };
    }, [])

    const onReady = (event) => {
        setPlayer(event.target);
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

    const swapScreenfunc = (set) => {
        switch (set) {
            case 1: setSwapScreen({
                ytScreen: ' col-start-1 row-start-1 col-span-9 row-span-9',
                twScreen: ' col-start-10 row-start-1 col-span-3 row-span-3',
                third: '',
                controls: ' col-span-9',
            })
                break
            case 2: setSwapScreen({
                ytScreen: ' col-start-10 row-start-1 col-span-3 row-span-3',
                twScreen: ' col-start-1 row-start-1 col-span-9 row-span-9',
                third: '',
                controls: ' col-span-9',
            })
                break
            case 3:
                setSwapScreen({
                    ytScreen: ' col-start-1 row-start-1 col-span-6 row-span-6',
                    twScreen: ' col-start-7 row-start-1 col-span-6 row-span-6 ',
                    third: ' col-start-7 row-start-7 row-span-3 col-span-6',
                    controls: ' row-start-7 col-start-1 col-span-6 row-span-6',
                })
                break
        }

    }

    return (
        <main className="w-full flex flex-wrap justify-center lg:p-2 lg:gap-2 lg:h-screen lg:grid lg:grid-cols-12 lg:grid-rows-10 lg:pl-4">

            {/* Live do Youtube */}
            <div className={"w-full relative max-w-sm lg:max-w-none lg:rounded-sm " + swapScreen.ytScreen} >
                <div className='absolute top-0 left-0 w-full  pointer-events-none aspect-video z-10 rounded-sm' style={{ boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)' }}></div>
                {
                    liveId ?
                        <div className='w-full relative lg:rounded-sm aspect-video overflow-hidden'>

                            <YouTube iframeClassName='w-full h-full aspect-video -z-10' videoId={liveId} opts={opts} onReady={onReady} />
                        </div>
                        :
                        <div className="w-full relative flex flex-col items-center aspect-video text-black p-3 pb-0" >

                            <img className=' absolute top-0 left-0 h-full w-full object-fill -z-10' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a014f78683509.5cc559ebcfd32.png" alt="" />
                        </div>
                }
            </div>

            {/* Controles */}
            <div className={" w-full h-full items-start row-start-10 gap-1  text-white  justify-between text-xl  hidden lg:flex lg:flex-col" + swapScreen.controls} >

                <div className='flex justify-between items-center w-full h-1/2 '>   
                    <div className='flex  justify-center items-center space-x-1 cursor-pointer order-1 w-36 overflow-hidden group'>
                        <button onClick={() => { document.getElementById("range_input").value = 0 }}>
                            <IconWithTooltip icon={<MdVolumeUp />} text="volume" />
                        </button>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            id='range_input'
                            className='range_input_style lg:opacity-0 group-hover:opacity-100 w-28'
                            onChange={handleVolumeChange}
                        />
                    </div>
                    <div className='text-xl items-center lg:text-3xl space-x-4 lg:order-2'>
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
                    <div className='space-x-4 order-3 w-36 flex justify-end '>
                        <button onClick={toggleFullScreen}>
                            <IconWithTooltip icon={<MdFullscreen />} text="Full Screen" />
                        </button>
                        <button onClick={toggleSubTitle}>
                            <IconWithTooltip icon={<MdOutlineSubtitles />} text="Subtitles" />
                        </button>
                        <button onClick={() => { swapScreenfunc(1) }}>
                            <IconWithTooltip icon={<MdFilter1 />} text="Big Youtube" />
                        </button>
                        <button onClick={() => { swapScreenfunc(2) }}>
                            <IconWithTooltip icon={<MdFilter2 />} text="big Twitch" />
                        </button>
                        <button onClick={() => { swapScreenfunc(3) }}>
                            <IconWithTooltip icon={<MdFilter3 />} text="Side by Side" />
                        </button>
                    </div>
                </div>

                <div className='w-full h-1/2 overflow-hidden shadow-inner shadow-black bg-slate-900 opacity-60 flex justify-around '>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500  animate-block'></div>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500  animate-block'></div>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500 animate-block'></div>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500  animate-block'></div>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500  animate-block'></div>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500  animate-block'></div>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500  animate-block'></div>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500  animate-block'></div>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500  animate-block'></div>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500  animate-block'></div>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500  animate-block'></div>
                    <div className='h-full w-2  bg-gradient-to-t from-purple-700 to-purple-500  animate-block'></div>
                </div>

            </div>

            {/* Live da Twitch */}
            <div className={"w-full relative max-w-sm lg:max-w-none overflow-hidden lg:rounded-sm" + swapScreen.twScreen}>
                <div className='absolute top-0 left-0 rounded-sm w-full pointer-events-none aspect-video z-10' style={{ boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)' }}></div>
                <iframe
                    className="w-full aspect-video relative lg:rounded-sm "
                    src="https://player.twitch.tv/?channel=patopapao&amp;enableExtensions=false&amp;parent=twitch.tv&amp;quality=auto&amp;volume=1&amp;parent=keyd-watch.vercel.app" type="text/html" allowFullScreen
                >
                </iframe>
            </div>

            {/* 3° tela */}
            < div className={"w-full max-w-sm min-h-[500px] lg:min-h-0 lg:max-w-none col-start-10 col-span-3 row-start-4 row-span-7 lg:rounded-sm overflow-y-auto" + swapScreen.third}>
                {acompanhamento === 'twitchChat' && (
                    <iframe
                        className='w-full h-full lg:min-h-0'
                        src="https://www.twitch.tv/embed/patopapao/chat?&darkpopout&amp;enableExtensions=true&amp;parent=twitch.tv&amp;parent=keyd-watch.vercel.app"
                        type="text/html"
                    ></iframe>
                )}
                {acompanhamento === 'comunidade' && (
                    <DisqusComments />

                )}
                {acompanhamento === 'termo' && (
                    <iframe className='w-full h-full' src='https://term.ooo/'></iframe>
                )}

            </div>
        </main>
    )

}
//keyd-watch.vercel.app