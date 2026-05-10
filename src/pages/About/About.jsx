import React from 'react';
import about2 from '../../assets/about2.jpg';

const About = () => {
    return (
        <div className='max-w-300 mx-auto mt-8'>
            <div className="flex flex-col-reverse md:flex-row gap-6 justify-around items-center ">
                <p className='px-4'>
                    Hi, I’m <span className='font-bold'>Ashraful Alam Rayhan</span> — a frontend developer and machine learning enthusiast passionate about building modern, responsive, and intelligent web applications.. <br />

                    I specialize in creating clean and interactive user experiences using React, JavaScript, TypeScript, and Tailwind CSS. I enjoy transforming ideas into functional digital products that are both visually appealing and user-friendly.<br />

                    Alongside frontend development, I have a growing interest in Machine Learning and Artificial Intelligence. I’m continuously learning ML concepts such as data preprocessing, model training, supervised learning, and neural networks using Python and modern AI tools. I’m especially interested in how intelligent systems can be integrated into web applications to create smarter and more efficient user experiences.<br />

                    My journey in technology started from curiosity about how software works, which gradually led me into programming, problem-solving, and modern web development. Over time, I also developed knowledge in object-oriented programming, data structures & algorithms, and software engineering principles through working with Java, Python, and C++.<br />
                    I enjoy learning new technologies, building real-world projects, and constantly improving my development and problem-solving skills. My goal is to become a full-stack developer capable of combining modern web technologies with AI and machine learning to build impactful and innovative applications.
                </p>
                <img className='max-w-80 rounded-4xl' src={about2} alt="About Me" />
            </div>
        </div>
    );
};

export default About;