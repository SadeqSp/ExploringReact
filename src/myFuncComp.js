import React from 'react';

// Regular Function Component   [props > string/variable]             
function Func1 (props) {
    return <code>{props.name} - {props.age}</code>;
}

// Arrow Function Component     [props > object]       
const Func2 = (props) =>            
    <code>{props.person.name} - {props.person.age}</code>;

function FuncComp () {
    const a = '22 [variable]';
    const b = {name:'third', age: '50 [object]'};
    return (
        <div>
            <h4> function component:</h4>
            <div class='box'>
                <Func1 name='first' age='44 [string]' />
                <Func1 name='second' age={a} />
                <Func2 person={b} />
            </div>
        </div>
    )
}

export default FuncComp;