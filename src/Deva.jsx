
//import Apple from './Apple.jsx';
//import State from './State.jsx';
//import Form from './Form.jsx';
//import Class from './Class.jsx';

import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Params from "./Params.jsx";
function Deva(){
  return(
  
  
<Router>
<h1>
  <Routes>
  <Route path="/:id" element={<Params/>}/>
</Routes>
</h1>
</Router>

  
  
  );
}
export default Deva;


