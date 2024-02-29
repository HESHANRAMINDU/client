import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/general.css'

function Register() {

    const [uname,setUname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    function handlesubmit(){
        const user = {
            name : uname,
            email : email,
            phone : phone
        }

        console.log(user);

        axios.post('http://localhost:8082/register',user)
        .then(res=>{
            console.log(res);
            alert("User Registration Successful!");
            setUname("");
            setEmail("");
            setPhone("");
        })
        .catch(err=>console.log(err));
    }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
        
            <div className='bs'>
                <h2>Register Users</h2>
                <input type='text' className='form-control' placeholder='Name'
                value={uname} onChange={(e)=>{setUname(e.target.value)}}/>

                <input type='text' className='form-control' placeholder='Email'
                value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                <input type='text' className='form-control' placeholder='Phone'
                value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>

                <button className='btn btn-dark mt-3' onClick={handlesubmit}>Register</button>
            </div>
            
        </div>

      </div>
    </div>
  )
}

export default Register
