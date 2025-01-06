import { useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
function User()

{

    const [user,setuser]=useState([{
        name:"deva",
    email:"deva@gmail.com",
     address:"chennai"}]);
     const navigate = useNavigate();
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
        .then(()=>{
            console.log("user deleted successfully");
            navigate('/');
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <>
        <h1>
         <li><Link id="link" to='/Createuser'>Createuser</Link></li></h1>
        <table border={1}>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
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
                                <button onClick={()=>deleteUser(users._id)} >Delete</button>
                          
                        </td>
                </tr>
            ))
        }
        </table>
        
        </>
    )

}
export default User;