import React from 'react';
import TypeWriter from 'react-typewriter';
const Banner = () => {
    
    return (
        <div className="text-white mt-20" >
            <h1 className="text-6xl p-3">Hello, I am</h1>
            <h1 className="text-6xl font-extrabold pb-8" data-aos="fade-left">Tasfiqul Azad</h1>
            <TypeWriter  className="text-4xl font-semibold p-4" typing={.5}>
  A Mern 
  <span> Stack Developer. . . </span>
  
</TypeWriter>
            <h5 className="text-2xl font-thin pt-8 pb-2"> And Here is my resume</h5>
            <a target="blank" href="https://drive.google.com/file/d/1Mh0VqJD3Wk5EetJ30b3sYdZ6aGlyX0yr/view?usp=sharing">
            <button style={{transition:"all 0.3s ease-in",}} className="text-3xl border-2 rounded p-4 mt-5 hover:bg-blue-600 mb-28" data-aos="fade-right">Download Resume</button>
           
            </a>
        </div>
    );
};

export default Banner;