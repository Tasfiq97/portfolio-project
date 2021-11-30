import React from 'react';
import Footer from '../../Home/Home/Footer/Footer';
import screenshot1 from "../../../Images/pharmacore-shop2.png"
import screenshot2 from "../../../Images/pharmacore-shop-loginpng.png"
import screenshot3 from "../../../Images/pharmacore-shop-cofirm.png"
import { Link } from 'react-router-dom';

const Project3 = () => {
    return (
        <div style={{background:"black"}}>
        <h1 className="text-white text-6xl font-extrabold p-10">Project details</h1>
        <h1 className="text-4xl font-extrabold text-left text-white p-10">Project name :  <span className="text-blue-600"> Pharmacore-zone </span></h1>
        <div className="lg:grid lg:grid-cols-3 gap-10 p-10 mt-4">
            <div> 
                <h3 className="text-3xl text-white font-semibold p-5">Home page</h3>
                <img className="w-3/3 sm:mt-5" src={screenshot1} alt="" />
            </div>
            <div>
            <h3 className="text-3xl text-white font-semibold p-5">Login page</h3>
                     <img className="w-3/3 sm:mt-5" src={screenshot2} alt="" />
            </div>
            <div>
            <h3 className="text-3xl text-white font-semibold p-5"> Order Confirm Page</h3>
                <img className="w-3/3 sm:mt-5" src={screenshot3} alt="" />
            </div>
        </div>
        <div>
            <h1 className="text-4xl text-white text-extrabold text-left px-12 py-5">Project Description</h1>
            <p className="text-white text-xl text-left py-5 px-12">this is about a pharmacy where you can get all the medicine you want.user has to select our desire medicine.but login or sign up is must to order medicine. user can sign in with google also. we deliver user product in an hour.thats our promise to you</p>
            <div className="lg:flex lg:justify-center p-10">
               <a target="blank" href="https://heath-care-pharmaco-zone.web.app/">
               <button  style={{transition:"all 0.3s ease-in",}} className="text-2xl border-2 rounded p-4 mt-8 hover:bg-blue-600  text-white mr-8 ">Live site</button>
               </a>
               <a target="blank" href="https://github.com/Tasfiq97/react-pharma-app-firebase">
               <button  style={{transition:"all 0.3s ease-in",}} className="text-2xl border-2 rounded p-4 mt-8 hover:bg-blue-600  text-white mr-8 ">Github Link</button>
               </a>
                
            </div>
            <Link to="/home">
                <button style={{transition:"all 0.3s ease-in",}} className="text-2xl border-2 rounded p-4 mt-8 hover:bg-green-400  text-white mb-32 ">Go to home page -></button></Link>
        </div>
        <div>
            
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Project3;