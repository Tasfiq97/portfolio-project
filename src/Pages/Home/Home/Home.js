import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"
import Navbar from '../../Shared/Navbar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Home = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing:"ease"
        });
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <About></About>
           <Projects></Projects>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;