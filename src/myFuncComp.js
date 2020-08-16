import React from 'react';

// Function Component             
function Func1 () {
    return <code>function component</code>;
}

function FuncComp () {
    return (
        <div>
            <Func1 />
        </div>
    )
}

export default FuncComp;