import React from 'react';
import project1 from "../../../Images/Squadrish-drone2.png"
import project2 from "../../../Images/Expressos2.png"
import project3 from "../../../Images/pharmacore-shop2.png"
import "../Projects/ProjectShow.css"
import { Link } from 'react-router-dom';



const ProjectShow = () => {
    
    return (
        <div className="grid lg:grid-cols-3 gap-3 p-12">
            <div className="p-4 border-2 rounded mt-5" data-aos="zoom-in">
                <div>
                    <img className="w-3/3 img-hover " src={project1} alt="" />
                </div>
                <div>
                    <h2 className="text-5xl p-5 font-extrabold text-blue-600 text-left mb-3"> Squadrish drone</h2>
                    <ol className="text-white text-left" type="circle">
                        <li>-This project is made by material ui</li>
                        <li>-in this project you can buy any type of drone having multiple camera</li>
                        <li>-in more drone section,there are 12 drones where you can select and place your order</li>
                        
                    </ol>
                    <Link to="/project1">
                    <button style={{transition:"all 0.3s ease-in",}} className="text-2xl border-2 rounded p-4 mt-8 hover:bg-blue-600  text-white ">Project Details</button>
                    </Link>
                </div>
            </div>
            <div className="p-4 border-2 rounded mt-5" data-aos="zoom-in-up">
                <div>
                    <img className="w-3/3 img-hover" src={project2} alt="" />
                </div>
                <div>
                    <h2 className="text-5xl px-5 py-8 font-extrabold text-blue-600 text-left"> Expressos Delivery</h2>
                    <ul className="text-white text-left">
                        <li>-this project s built by react tailwind css</li>
                        <li>-user can search through all the offers we give them</li>
                        <li>-user can order the food and also can cancel food order delivery</li>
                        
                    </ul>
                    <Link to="/project2">
                    <button style={{transition:"all 0.3s ease-in",}} className="text-2xl border-2 rounded p-4 mt-8 hover:bg-blue-600  text-white ">Project Details</button>
                    </Link>
                </div>
            </div>
            <div className="p-4 border-2 rounded mt-5" data-aos="zoom-out">
                <div>
                    <img className="w-3/3 img-hover" src={project3} alt="" />
                </div>
                <div>
                    <h2 className=" text-5xl px-2 py-8  font-extrabold text-blue-600 text-left"> Pharmacore Zone</h2>
                   <ul className="text-white text-left">
                       <li>-this project is made with bootstrap</li>
                       <li>-user have to select desire medicine</li>
                       <li>- login or sign up is must to order medicine</li>
                       <li>-user can sign in with google also</li>
                   </ul>
                   <Link to="/project3">
                    <button style={{transition:"all 0.3s ease-in",}} className="text-2xl border-2 rounded p-4 mt-8 hover:bg-blue-600  text-white ">Project Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectShow;