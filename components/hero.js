import React,{useRef, useState} from "react";
import logo from '../immagini/logo.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const Hero=()=>{
    //State
    const [inputActive,setInputActive]=useState(false);
    const [searchActive,setSearchActive]=useState(false);
    //Ref
    const searchRef=useRef(null);

    //FUNCTIONS
    const searchHandler=(e)=>{
        let string=e.target.value;
        if(string!=""){
            setSearchActive(true);
        }
        else{setSearchActive(false);}
    }



    return(
        <div className="hero" id="hero">
            <div className="hero-container">
                <img src={logo} className="logo" alt="AroundBisceglie"/>
                <h5 className="intro">Esplora tutti gli angoli della citta di Bisceglie
                    e ritrova il piacere della scoperta</h5>
                <input type="search" className="search"  placeholder="Search...."
                ref={searchRef}
                onChange={searchHandler}
                onFocus={()=>setInputActive(true)}
                onBlur={()=>setInputActive(false)}/>




                <div className={inputActive ? "search-container" : "hide"}>
                    
                    <div className={searchActive ? "search-area" : "hide"}>
                        <h1>Risultati</h1>
                        <h1>Risultati</h1>
                        <h1>Risultati</h1>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Hero;