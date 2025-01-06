import {useState,useEffect,useRef} from "react";

function Apple(props){
    let [Name,SetName]=useState(props.name);
 
   let ccc=useRef(0);
    useEffect(()=>{
        
        console.log(ccc.current++);
         //code cleanup
        return(()=>{
            console.log("it may or may not be give there is no problem");
        })
    },[Name]);
        return(
        
            <h1>
            <input type="text" value={Name} onChange={(event)=>SetName(event.target.value)}/>
            <br/>
                HI This is {Name}</h1>
                
        )
    }

export default Apple;