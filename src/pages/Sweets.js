import React from 'react';
import './About.css';
import Sweetsproduct from './Sweetproduct';
const Sweets= () => {
    return ( 
        <>
        <h1 className='h1'> choose sweets</h1>
        <div className='mapbtn'>
           { Sweetsproduct.map((a)=>{
              return <div className="danger">
                  <h2>{a.id}</h2>
                  <img src={a.img} alt={a.alt} />
                  <p>{a.desc}</p> 
                  <button>{a.button}</button>
                  </div>
              })
             } 
              </div>
              </>
    );
}

export default Sweets;