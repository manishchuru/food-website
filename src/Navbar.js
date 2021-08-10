import React, { useState } from 'react';
import './App.css';
import { AiOutlineBars} from 'react-icons/ai';
import {GiCrossedSabres} from 'react-icons/gi';
import {IoMdPizza} from 'react-icons/io';

const Navbar = () => {
    const [isMobile,setIsMobile] = useState(false)
    return (
        <div>
           <div className="navbar">
           <div className="icon">
           <IoMdPizza/>
           </div> 
           <ul className={isMobile?"navbar-links-mobile":'navbar-links'}
           onClick={()=>setIsMobile(!isMobile)}>
           <li><a href="/">about</a></li>
           <li><a href="/home">home</a></li>
           <li><a href="/news">news</a></li>
           <li><a href="/content">content</a></li>
           <li><a href="/login">login</a></li>
           <li><a href="/logout">logout</a></li>
           </ul>
           <button className='btn' onClick={()=>setIsMobile(!isMobile)}>{(isMobile)?<GiCrossedSabres/>:<AiOutlineBars/>}</button>
           </div> 
        </div>
    );
}

export default Navbar;
