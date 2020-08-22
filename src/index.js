import React from 'react';
import ReactDOM from 'react-dom'
import './style.css';

import FuncComp from './myFuncComp';
import ClassComp from './myClassComp';

const mine = (
    <main>
        <FuncComp /> 
        <hr />
        <ClassComp />   
    </main>
)

ReactDOM.render(mine, document.getElementById('root'));