import React from 'react';
import Footer from '../../Home/Home/Footer/Footer';
import screenshot1 from "../../../Images/Expressos4.png"
import screenshot2 from "../../../Images/Expressos-placeorder.png"
import screenshot3 from "../../../Images/Expressos-allorders.png"
import { Link } from 'react-router-dom';

const Project2 = () => {
    return (
        <div style={{background:"black"}}>
        <h1 className="text-white text-6xl font-extrabold p-10">Project details</h1>
        <h1 className="text-4xl font-extrabold text-left text-white p-10">Project name :  <span className="text-blue-600"> Expressos Delivery </span></h1>
        <div className="lg:grid lg:grid-cols-3 gap-10 p-10 mt-4">
            <div> 
                <h3 className="text-3xl text-white font-semibold p-5">Home page</h3>
                <img className="w-3/3 sm:mt-5" src={screenshot1} alt="" />
            </div>
            <div>
            <h3 className="text-3xl text-white font-semibold p-5">Place Order page</h3>
                     <img className="w-3/3 sm:mt-5" src={screenshot2} alt="" />
            </div>
            <div>
            <h3 className="text-3xl text-white font-semibold p-5">Manage Order Page</h3>
                <img className="w-3/3 sm:mt-5" src={screenshot3} alt="" />
            </div>
        </div>
        <div>
            <h1 className="text-4xl text-white text-extrabold text-left px-12 py-5">Project Description</h1>
            <p className="text-white text-xl text-left py-5 px-12">this project s built by react tailwind css.user can seacrh througn all the offers we give them. they can order the food at reasonable price and also can cancel food order delivery. user can also see all the food ordered by other users in manage all order section where he can delete others order and also can update the status of the order. user can add his own offer by submit all the data and it will show in the offer section</p>
            <div className="lg:flex lg:justify-center p-10">
               <a target="blank" href="https://food-delivery-app-62c8c.web.app/">
               <button  style={{transition:"all 0.3s ease-in",}} className="text-2xl border-2 rounded p-4 mt-8 hover:bg-blue-600  text-white mr-8 ">Live site</button>
               </a>
               <a target="blank" href="https://github.com/Tasfiq97/food-delivery-app-client-site-firebase">
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

export default Project2;