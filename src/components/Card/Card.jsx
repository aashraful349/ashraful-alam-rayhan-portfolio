import React from 'react';
import aboutHome from '../../assets/about1.jpg';

const Card = () => {
    return (
        <div className="max-w-[1200px] mx-auto p-4">
            <div className=" flex flex-col-reverse md:flex-row gap-3 ">
                <div className="">
                    <h2 className="font-semibold text-2xl">Hi, I'm</h2>
                    <h1 className='font-bold text-3xl'>Md.Ashraful Alam Rayhan</h1>
                    <p>Frontend developer and machine learning enthusiast focused on building modern, responsive, and intelligent web applications using React, JavaScript, Tailwind CSS, and TypeScript. Passionate about learning new technologies and turning ideas into impactful digital experiences.</p>
                    <div className="flex gap-3 mt-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Contact Me
                        </button>
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            View Projects
                        </button>
                    </div>
                </div>
                <img className='max-w-80 rounded-full' src={aboutHome} alt="" />
            </div>
        </div>
    );
};

export default Card;