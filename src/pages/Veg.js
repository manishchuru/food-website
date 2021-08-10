import React from 'react';
import './About.css';
import Vegproduct from './Vegproduct';
const Veg= () => {
    return ( 
        <>
        <h1 className='h1'> choose vegetables</h1>
        <div className='mapbtn'>
           { Vegproduct.map((a)=>{
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

export default Veg;