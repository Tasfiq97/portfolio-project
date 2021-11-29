import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Projects from '../Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Projects></Projects>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;