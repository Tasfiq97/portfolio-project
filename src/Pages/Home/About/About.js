import React from 'react';
import photo from "../../../Images/1638089535060.jpg"

const About = () => {
    return (
        <div style={{background:"black"}} className="p-16" id="about">
            <h1 className="text-6xl text-white font-extrabold p-11">About Me</h1>
            <div className="lg:grid lg:grid-cols-2 lg:p-5">
                <div>
                    <img data-aos="fade-up" style={{borderRadius:"80%",}} className="w-2/3" src={photo} alt="" />
                </div>
                <div>
                     <p data-aos="fade-down" className="text-white lg:text-2xl lg:p-5 text-left text-justify leading-relax mt-5">Hello, I am tasfiqul azad. I am a passionate programmer who can build real time project based on mern technology. Very much specialized in react and other similar technologies  with strong analytical skills as a Jr. Web Developer. Have the ability to provide high quality solution for development of projects. Loves to learn new technologies and very much passionate about learning. I’m also adept with multiple project development methodologies. </p>
                     <p></p>
                </div>
            </div>
        </div>
    );
};

export default About;