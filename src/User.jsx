import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
function User()

{

    const [user,setuser]=useState([{
        name:"deva",
    email:"deva@gmail.com",
     address:"chennai"}]);
     useEffect(()=>
    {
        axios.get('https://hosting-2-tjx0.onrender.com/api/user/fetch')
        .then(result=>{
            setuser(result.data.users)
        })
        .catch(err=>{console.log(err)})
    },[]);
    const deleteUser=(id)=>{
        axios.delete(`https://hosting-2-tjx0.onrender.com/api/user/delete/${id}`)
        .then(result=>{
            console.log("user deleted successfully");
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <>
        
        <table border={1}>
            <tr>
                <th>Name</th>
                <th>email</th>
                <th>address</th>
                <th>Actions</th>
            </tr>{
            user.map((users) => (
                <tr>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.address}</td>
                    <td>
                    <Link to={`/Updateuser/${users._id}`}>
                                      <button>Update</button>
                                </Link>
                                <button onClick={(e)=>deleteUser(users._id)} >Delete</button>
                          
                        </td>
                </tr>
            ))
        }
        </table>
        
        </>
    )

}
export default User;