import React from 'react';
import project1 from "../../../Images/Squadrish-drone2.png"
import project2 from "../../../Images/Expressos2.png"
import project3 from "../../../Images/pharmacore-shop2.png"
import "../Projects/ProjectShow.css"



const ProjectShow = () => {
    
    return (
        <div className="grid lg:grid-cols-3 gap-3 p-12">
            <div className="p-4 border-2 rounded mt-5">
                <div>
                    <img className="w-3/3 img-hover " src={project1} alt="" />
                </div>
                <div>
                    <h2 className="text-4xl p-8 font-extrabold text-green-600 text-left mb-3"> Squadrish drone</h2>
                    <ol className="text-white text-left" type="circle">
                        <li>-This project is made by material ui</li>
                        <li>-in this project you can buy any type of drone having multiple camera</li>
                        <li>-in more drone section,there are 12 drones where you can select and place your order</li>
                        <li>-you have to login and register to place an order</li>
                        <li>-you can give a review</li>
                        <li>-admin can delete any order and also can delete any product</li>
                    </ol>
                </div>
            </div>
            <div className="p-4 border-2 rounded mt-5">
                <div>
                    <img className="w-3/3 img-hover" src={project2} alt="" />
                </div>
                <div>
                    <h2 className="text-4xl p-8 font-extrabold text-green-600 text-left"> Expressos Delivery</h2>
                    <ul className="text-white text-left">
                        <li>-this project s built by react tailwind css</li>
                        <li>-user can search through all the offers we give them</li>
                        <li>-user can order the food and also can cancel food order delivery</li>
                        <li>-user can also see all the food ordered by other users in manage all order section where he can delete others order and also can update the status of the order</li>
                        <li>user can add his own offer by submit all the data and it will show in the offer section</li>
                    </ul>
                </div>
            </div>
            <div className="p-4 border-2 rounded mt-5">
                <div>
                    <img className="w-3/3 img-hover" src={project3} alt="" />
                </div>
                <div>
                    <h2 className=" text-4xl p-8 font-extrabold text-green-600 text-left"> Pharmacore-Zone</h2>
                   <ul className="text-white text-left">
                       <li>-this project is made with bootstrap</li>
                       <li>-user have to select desire medicine</li>
                       <li>- login or sign up is must to order medicine</li>
                       <li>-user can sign in with google also</li>
                   </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectShow;