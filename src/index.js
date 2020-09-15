import React from 'react';
import ReactDOM from 'react-dom'
import './style.css';

import FuncComp from './myFuncComp';
import ClassComp from './myClassComp';
import MyState from './myState';
import MyList from './list';

const arr = ["list-A", "list-B"];

const mine = (
    <main>
        <FuncComp /> 
        <hr />
        <ClassComp />
        <MyState />
        <hr />
        <h5>list: </h5>
        <MyList data={arr} />
    </main>
)

ReactDOM.render(mine, document.getElementById('root'));