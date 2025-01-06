import User from './User.jsx';
import Updateuser from './Updateuser.jsx';
import Createuser from './Createuser.jsx';
import "./Apps.css";
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
function Apps()
{
    return(
        <>
        <Router>
            
           
            <Routes>
                <Route path="/" element={<User/>}/>
                <Route path="/Updateuser/:id" element={<Updateuser/>}/>
                <Route path="/Createuser" element={<Createuser/>}/>
            </Routes>
        </Router>
        
        </>
    )

}
export default Apps;