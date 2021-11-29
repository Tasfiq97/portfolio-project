
import React from 'react';
import bg from "../../../Images/bg.jpg"
import Banner from '../../Home/Banner/Banner';

const bgBanner={
    background:`url(${bg})`,
    backgroundPosition:"100% 100%",
    backgroundRepeat:"no-repeat",
    backgroundSize:"100% 100%",
    backgroundColor:"rgba(0,0,0,.73)",
    backgroundBlendMode: "darken, luminosity",
    
    
}
const Navbar = () => {
    
    return (
        <div style={bgBanner}> 
            <ul  className="list-none lg:flex justify-center text-2xl text-white" >
            <li style={{transition:"all 0.3s ease-in",}}   className="lg:mt-9 hover:text-green-400 mb-32 cursor-pointer">Home</li>
            <li style={{transition:"all 0.3s ease-in",}} className="ml-10 lg:mt-9 hover:text-green-400 mb-32 cursor-pointer">About me</li>
            <li style={{transition:"all 0.3s ease-in",}} className="ml-10 lg:mt-9 hover:text-green-400 mb-32 cursor-pointer" >Projects</li>
            <li style={{transition:"all 0.3s ease-in",}} className="ml-10 lg:mt-9 hover:text-green-400 mb-32 cursor-pointer">Contact me</li>
            </ul>
            <Banner></Banner>
        </div>
    );
};

export default Navbar;