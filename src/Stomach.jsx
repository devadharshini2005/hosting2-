/*function Stomach(probs)
{
return(
    <h1>Stomach:{probs.name}</h1>
)
}
export default Stomach;*/



/*import { useContext } from 'react';
import {namecontext} from './Hen';
function Stomach()
{
    let value=useContext(namecontext);
return(
    <h1>Stomach:{value.name}
    head:{value.deva}</h1>
)
}
export default Stomach;*/
import React, { useContext } from 'react';
import { NameContext } from './Hen';

function Stomach() {
    const { bcolor,color } = useContext(NameContext);

    return (
        <h1 style={{ color:color,backgroundColor: bcolor}}>
            This is the Stomach component.
        </h1>
    );
}

export default Stomach;
