import React, {useState} from 'react';

// Stateless Regular Function Component   [props > string/variable]             
function Func1 (props) {
    return <code>{props.name} - {props.age}</code>;
}

// Stateless Arrow Function Component     [props > object]       
const Func2 = (props) =>            
    <code>{props.person.name} - {props.person.age}</code>;

// Statefull Arrow Function Component       (+{useState}hook)
const Func3 = () => {
    const [name, setName] = useState ('forth');
    const [age, setAge] = useState ('15');
    
    function changeInfo() {
        setName('newName');
        setAge('newAge');
    }
    return (
        <div>
            <code>{name} - {age}</code>
            <button onClick={changeInfo}>change info</button>
        </div>
    );
};

function FuncComp () {
    const a = '22 [variable]';
    const b = {name:'third', age: '50 [object]'};
    return (
        <div>
            <h4>function component:</h4>
            <div class='box'>
                <h5>stateless</h5>
                <Func1 name='first' age='44 [string]' />
                <Func1 name='second' age={a} />
                <Func2 person={b} />
                <h5>statefull</h5>
                <Func3 />
            </div>
        </div>
    )
}

export default FuncComp;