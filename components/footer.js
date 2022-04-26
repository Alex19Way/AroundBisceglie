import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-socials">
                <h4>Seguici su</h4>
                <div className="social">
                
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
            </div>
            <h4>alexway@gmail.com</h4>
            <h4>&copy; AlexWay Copyright 2021</h4>
            
            
            
        </div>
    )
}

export default Footer;