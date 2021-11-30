import React from 'react';

const Contact = () => {
   
    return (
        <div style={{background:"black"}}id="contact">
            <h1 className="text-6xl text-white font-extrabold p-8">Contact Me</h1>
            <div>
        <form className="pt-8" action="https://formspree.io/f/meqnjzbp" method="POST" >
        <input data-aos="fade-left" name="name" className="text-xl mt-5 p-2 w-2/3 bg-gray-900 text-white" type="text" placeholder="Your name" required/> <br />
        <input data-aos="fade-right" name="email" className="text-xl mt-5 p-2 w-2/3 bg-gray-900 text-white" type="email" placeholder="Your email" required /> <br />
        <input data-aos="fade-right" name="number" className="text-xl mt-5 p-2 w-2/3 bg-gray-900 text-white" type="number" placeholder="Your number" required /> <br />
        <textarea data-aos="fade-up" name="message" className="text-xl mt-5 p-2 w-2/3 bg-gray-900 text-white"cols="30" rows="10" placeholder="write a message " required></textarea> <br />
        <button  style={{transition:"all 0.3s ease-in",}} className="text-3xl border-2 rounded px-12 py-2 mt-5 hover:bg-blue-600 mb-28 text-white " type="submit">Submit</button>
        </form>
            </div>
        </div>
    );
};

export default Contact;