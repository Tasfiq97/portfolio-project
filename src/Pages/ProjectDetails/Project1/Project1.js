import React, { useEffect } from 'react';
import Footer from '../../Home/Home/Footer/Footer';
import screenshot1 from "../../../Images/Squadrish-drone2.png"
import screenshot2 from "../../../Images/Squadrish-drone-dashboard.png"
import screenshot3 from "../../../Images/Squadrish-drone-login.png"
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"
const Project1 = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing:"ease"
        });
    },[])
    return (
        <div style={{background:"black"}}>
            <h1 className="text-white text-6xl font-extrabold p-10">Project details</h1>
            <h1 className="text-4xl font-extrabold text-left text-white p-10">Project name :  <span className="text-blue-600"> Squadrish Drone</span></h1>
            <div className="lg:grid lg:grid-cols-3 gap-10 p-10 mt-4">
                <div data-aos="fade-right" >  
                    <h3 className="text-3xl text-white font-semibold p-5">Home page</h3>
                    <img  className="w-3/3 sm:mt-5" src={screenshot1} alt="" />
                </div>
                <div data-aos="fade-up"  >
                <h3 className="text-3xl text-white font-semibold p-5">Dashboard page</h3>
                         <img data-aos="fade-up"  className="w-3/3 sm:mt-5" src={screenshot2} alt="" />
                </div>
                <div data-aos="fade-down" >
                <h3 className="text-3xl text-white font-semibold p-5">Login Page</h3>
                    <img  className="w-3/3 sm:mt-5" src={screenshot3} alt="" />
                </div>
            </div>
            <div>
                <h1 className="text-4xl text-white text-extrabold text-left px-12 py-5">Project Description</h1>
                <p className="text-white text-xl text-left py-5 px-12">this project is made for purchasing user's favorite drone.In this project you can buy any type of drone having multiple camera and at a good range.in more drone section , there are 12 drones where you can select and place your order.User have to login and register to place an order.hen user can go to dashboard and delete or cancel your order,user can give review ,and it will be shown in home page.admin can make anyone admin and he will change your product status from pending to shipped.he can delete any order and also can delete any product</p>
                <div className="lg:flex lg:justify-center p-10 ">
                   <a target="blank" href="https://niche-project-drone.web.app/">
                   <button  style={{transition:"all 0.3s ease-in",}} className="text-2xl border-2 rounded p-4 mt-8 hover:bg-blue-600  text-white mr-8 ">Live site</button>
                   </a>
                   <a href="https://github.com/Tasfiq97/react-drone-shop-client-firebase">
                   <button  style={{transition:"all 0.3s ease-in",}} className="text-2xl border-2 rounded p-4 mt-8 hover:bg-blue-600  text-white mr-8 ">Github Link</button>
                   </a>
                    
                </div>
                <Link to="/home">
                <button style={{transition:"all 0.3s ease-in",}} className="text-2xl border-2 rounded p-4 mt-8 hover:bg-green-400  text-white mb-20 ">Go to home page -></button></Link>
            </div>
            <div>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Project1;