'use client'
const Chat = () => {
        return (
            <iframe
                className='w-full h-full min-h-[500px] lg:min-h-0'
                src="https://www.twitch.tv/embed/patopapao/chat?&darkpopout&amp;enableExtensions=false&amp;parent=twitch.tv&amp;parent=pain-watch.vercel.app"
                type="text/html"
            ></iframe>
        )
    }
    export default Chat;