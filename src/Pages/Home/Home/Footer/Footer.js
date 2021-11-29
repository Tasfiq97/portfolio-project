import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div style={{background:"black",padding:"30px"}}>
            <h1 className="text-2xl p-4 text-white">Copyright &copy; 2021 all rights reserved </h1>
            <FontAwesomeIcon className="text-white text-3xl mx-5" icon={faGoogle} />
            <FontAwesomeIcon className="text-white text-3xl mx-5" icon={faLinkedin} />
            <FontAwesomeIcon className="text-white text-3xl mx-5" icon={faInstagram} />
            <FontAwesomeIcon className="text-white text-3xl mx-5" icon={faFacebook} />
        </div>
    );
};

export default Footer;