import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <h2 className="text-black text-6xl p-5 ">blog page comming soon</h2>
            <Link to="/home">
                <button style={{transition:"all 0.3s ease-in",}} className="text-2xl border-2 rounded p-4 mt-8 hover:bg-green-600 mb-20 ">Go to home page -></button></Link>
        </div>
    );
};

export default Blogs;