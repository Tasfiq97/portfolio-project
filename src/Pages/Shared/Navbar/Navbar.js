
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import bg from "../../../Images/banner.jpg"
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
        <div style={bgBanner} > 
            <ul  className="list-none lg:flex justify-center text-2xl text-white" >
            <li style={{transition:"all 0.3s ease-in",}}   className="lg:mt-9 hover:text-green-400 lg:mb-32 sm:mb-14 cursor-pointer">Home</li>
            <HashLink  to="/home#about">
            <li style={{transition:"all 0.3s ease-in",}} className="lg:ml-10 lg:mt-9 hover:text-green-400 lg:mb-32 sm:mb-14  cursor-pointer">About me</li>
            </HashLink>
           <HashLink to="/home#projects">
           <li style={{transition:"all 0.3s ease-in",}} className="ml-10 lg:mt-9 hover:text-green-400 lg:mb-32 sm:mb-14  cursor-pointer" >Projects</li>
           </HashLink>
           <Link to="/blogs" >
           <li  style={{transition:"all 0.3s ease-in",}} className="ml-10 lg:mt-9 hover:text-green-400 lg:mb-32 sm:mb-14  cursor-pointer" >Blogs</li>
           </Link>
           <HashLink to="/home#contact">
           <li style={{transition:"all 0.3s ease-in",}} className="ml-10 lg:mt-9 hover:text-green-400 lg:mb-32 sm:mb-14  cursor-pointer">Contact me</li>
           </HashLink>
            </ul>
            <Banner></Banner>
        </div>
    );
};

export default Navbar;