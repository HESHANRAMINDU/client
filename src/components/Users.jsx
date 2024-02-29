import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Users() {

    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8082/users')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=> console.log(err));
    },[]);

    const handleDelete = (id) =>{
      axios.delete('http://localhost:8082/delete/'+id)
      .then(res => window.location.reload())
      .catch(err => console.log(err))
    }

  return (
    <div>
      <table>
        <thead>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
        </thead>
        <tbody>
            {data.map((d,i)=> (
                <tr key={i}>
                    <td>{d.Id}</td>
                    <td>{d.Name}</td>
                    <td>{d.Email}</td>
                    <td>{d.Phone}</td>

                    <td>
                      <Link to={`/update/${d.Id}`} className='btn btn-primary btn-sm me-2'>Update</Link>
                      <button type="button" onClick={()=>handleDelete(d.Id)} className='btn btn-danger btn-sm'>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
