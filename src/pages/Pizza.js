import React from 'react';
import './About.css';
import Pizzaproduct from './Pizzaproduct';
const Pizza= () => {
    return ( 
        <>
        <h1 className='h1'> choose pizzaaa</h1>
        <div className='mapbtn'>
           { Pizzaproduct.map((a)=>{
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

export default Pizza;