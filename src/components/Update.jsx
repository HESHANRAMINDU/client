import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {

  const {id} = useParams();

  const [uname,setUname] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");

  const navigate = useNavigate();

  function handlesubmit(){

    const user = {
        name : uname,
        email : email,
        phone : phone
    }

    axios.put('http://localhost:8082/update/'+id,user)
    .then(res=>{
        console.log(res);
        alert("User Update Successful!")   
    })
    .then((res)=> navigate("/users"))
    .catch(err=>console.log(err));
}

useEffect(()=>{
    axios
        .get('http://localhost:8082/getuser/'+ id)
        .then((res)=>{
          setUname(res.data[0].Name);
          setEmail(res.data[0].Email);
          setPhone(res.data[0].Phone);
        })
        .catch(err=> console.log(err));
},[]);

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
        
            <div className='bs'>
                <h2>Update the User</h2>
                <input type='text' className='form-control' placeholder='Name'
                value={uname} onChange={(e)=>{setUname(e.target.value)}}/>

                <input type='text' className='form-control' placeholder='Email'
                value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                <input type='text' className='form-control' placeholder='Phone'
                value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>

                <button className='btn btn-dark mt-3' onClick={handlesubmit}>Update</button>
            </div>
            
        </div>

      </div>
    </div>
  )
}

export default Update
