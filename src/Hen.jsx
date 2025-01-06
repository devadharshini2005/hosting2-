/*import Egg from './Egg.jsx';
function Hen(probs)
{
return(
    <div>
    <h1>Hen</h1>
    <Egg name={probs.name}/>
    </div>
)
}
export default Hen;*/
/*import Egg from './Egg.jsx';
import { createContext } from 'react';
export let namecontext=createContext();
function Hen()
{
   let stu={
    name:"deva",
    deva:23
   };
return(
    <namecontext.Provider value={stu}>
    <h1>Hen</h1>
    <Egg/>
    </namecontext.Provider>
)
}
export default Hen;*/

import React, { createContext, useState } from 'react';
import Egg from './Egg.jsx';

export const NameContext = createContext();

function Hen() {
    const [color, setColor] = useState("#000000");
    const [bcolor, setBColor] = useState("#FFFFFF");
    const changeColor = () => {
        setColor(color==="White"?"Black":"White");
        setBColor(bcolor==="black"?"White":"black");
    };

    return (
        <NameContext.Provider value={{ color,bcolor }}>
            <div >
                <h1>Hen</h1>
                <button onClick={changeColor}>Click it to play</button>
                <Egg />
            </div>
        </NameContext.Provider>
    );
}

export default Hen;


