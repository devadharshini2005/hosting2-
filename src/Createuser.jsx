import React from 'react';  
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

function Createuser() {
         const [name,setName]=useState([]);
         const [email,setEmail]=useState([]);
         const [address,setAddress]=useState([]);
         const navigate=useNavigate([]);
            
              const submit=(e)=>{
                e.preventDefault();    //to prevent default rendering
               axios.post('https://hosting-2-tjx0.onrender.com/api/user/create',{ name,email,address})
                .then(result=>{
                     console.log(result.data);
                     navigate('/')
              })
                .catch(err=>{
                     console.log(err);
            })
        }


    return (
        <div id="div">
            <h1>CreateUser</h1>
            <form onSubmit={submit}>
                <label id="label">Name</label>
                <input type="text" id="name" onChange={(e)=>setName(e.target.value)} /><br/><br></br>
                <label id="label">Email</label>
                <input type="text" id="name"  onChange={(e)=>setEmail(e.target.value)}></input><br/><br/>
                <label id="label">Address</label>
                <input type="text" id="name" onChange={(e)=>setAddress(e.target.value)}></input><br/><br/>
                <button type="submit">Create</button>
                </form>        
                </div>
    )
}
export default Createuser;