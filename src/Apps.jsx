import User from './User.jsx';
import Updateuser from './Updateuser.jsx';
import Createuser from './Createuser.jsx';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
function Apps()
{
    return(
        <>
        <Router>
            
            <ol>
                <li><Link to='/'>User</Link></li>
                <li><Link to='/Updateuser'>Updateuser</Link></li>
                <li><Link to='/Createuser'>Createuser</Link></li></ol>
            <Routes>
                <Route path="/" element={<User/>}/>
                <Route path="/Updateuser" element={<Updateuser/>}/>
                <Route path="/Createuser" element={<Createuser/>}/>
            </Routes>
        </Router>
        
        </>
    )

}
export default Apps;