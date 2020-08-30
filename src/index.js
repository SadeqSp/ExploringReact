import React from 'react';
import ReactDOM from 'react-dom'
import './style.css';

import FuncComp from './myFuncComp';
import ClassComp from './myClassComp';
import MyState from './myState';

const mine = (
    <main>
        <FuncComp /> 
        <hr />
        <ClassComp />
        <MyState />
    </main>
)

ReactDOM.render(mine, document.getElementById('root'));