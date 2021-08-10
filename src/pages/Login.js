import React, { useState } from 'react';
import './Login.css';
import Axios from 'axios';
const Login = () => {
    const [fulldata,setFulldata] = useState({
        email:"",
        password:"",
        fname :"",
        lname:"",
        age:"",
        phonumber:""
    });
    const myfun= (e)=>{
     const name = e.target.name;
     const value = e.target.value ;
     setFulldata({...fulldata,[name]:value})
    }
   const  myfunction=(e)=>{
       e.preventDefault();
       Axios.post('http://localhost:7000/hel',fulldata)
       console.log(fulldata);
   }
    return (
        <div className='fullform'>
         <form  className="form" onSubmit={myfunction}>
            <label >email</label><br />
            <input type="email" placeholder='enter email'
            name ='email' onChange={myfun} value={fulldata.email} /> <br />
            <label >password</label><br />
            <input type="psd" placeholder='enter password'
            name ='password' onChange={myfun} value={fulldata.password} />  <br />
            <label >fname</label><br />
            <input type="text" placeholder='enter fname'
            name ='fname' onChange={myfun} value={fulldata.fname} /> <br />
            <label >lname</label><br />
            <input type="text" placeholder='enter lname'
            name ='lname' onChange={myfun} value={fulldata.lname} /> <br />
            <label >age</label><br /> 
            <input type="age" placeholder='enterage'
            name ='age' onChange={myfun} value={fulldata.age} /> <br />
            <label >phone number</label><br />
            <input type="num" placeholder='enter phone number '
            name ='phonumber' onChange={myfun} value={fulldata.phonumber} /> <br />
           <button type='submit' >submit </button>
            </form>
        </div>
    );
}

export default Login;
