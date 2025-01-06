import {useState,useRef} from "react";

function Reef(){
   /* let [count,setCount]=useState(0);
    let countRef=useRef(0);
    let incre=()=>{
        setCount(count+1);
        countRef.current++;
        console.log("state:",count);
        console.log("Ref: ",countRef.current);
    }
    return(
        <div>
            <h1>Count :{count}</h1>
            <button onClick={incre}>+++</button>
        </div>

    );*/
    let [Name,setName]=useState("");
    let nameref=useRef(0);
    let change=(event)=>{
        setName(event.target.value);
        nameref.current++;
        console.log("Name:",event.target.value);
        console.log("Nameref",nameref.current);
    };
    return(
    <h1>
    <input type="text" value={Name} onChange={change}/>
    <br/>
        HI This is {Name}</h1>
    );
    /*let [Name,setName]=useState("");
    let nameref=useRef(" ");
    let change=(event)=>{
        setName(event.target.value);
        nameref.current=event.target.value;
        console.log("Name:",event.target.value);
        console.log("Nameref",nameref.current);
    };
    return(
    <h1>
    <input type="text" value={Name} onChange={change}/>
    <br/>
        HI This is {Name}</h1>
    );*/

}
export default Reef;