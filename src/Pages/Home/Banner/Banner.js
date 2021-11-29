import React from 'react';

const Banner = () => {
    return (
        <div className="text-white mt-32">
            <h1 className="text-6xl p-3">Hello, I am</h1>
            <h1 className="text-6xl font-extrabold p-2">Tasfiqul Azad</h1>
            <h5 className="text-3xl font-thin p-2"> And Here is my resume</h5>
            <a target="blank" href="https://drive.google.com/file/d/1Mh0VqJD3Wk5EetJ30b3sYdZ6aGlyX0yr/view?usp=sharing">
            <button style={{transition:"all 0.3s ease-in",}} className="text-3xl border-2 rounded p-4 mt-5 hover:bg-green-600 mb-28 ">Download Resume</button>
            </a>
        </div>
    );
};

export default Banner;