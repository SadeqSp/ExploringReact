import React from 'react';

// Function Component             
function Func1 () {
    return <code>regular</code>;
}

// Arrow Function Component       
const Func2 = () =>              
    <code>arrow</code>;

function FuncComp () {
    return (
        <div>
            <h4> function component:</h4>
            <div class='box'>
                <Func1 />
                <Func2 />
            </div>
        </div>
    )
}

export default FuncComp;