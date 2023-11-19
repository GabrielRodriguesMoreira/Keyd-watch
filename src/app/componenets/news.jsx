import React from 'react';

const News = ({ title, img, text, link, date }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className='group relative h-full w-64 rounded overflow-hidden shadow-sm shadow-white'>

            <img
                src={img}
                alt={title}
                className="object-cover w-full h-full"
            />
            <div className="absolute h-full flex flex-col justify-end bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-40 text-white p-2">
                <h2 className="text-xl font-bold mb-2 transition-all ease-in-out duration-300">{title}</h2>
                <p className="hidden group-hover:block text-ellipsis">{text}</p>
                <p className="text-sm">{date}</p>
            </div>
        </a>
    );
};

export default News;
