import React from 'react';
import ReactDOM from 'react-dom'
import './style.css';

import FuncComp from './myFuncComp';
import ClassComp from './myClassComp';
import MyState from './myState';
import ConsComp from './myConstComp';
import MyList from './list';
import ContactManager from './contact';

const contacts = ["Aa", "Bb", "Cc"];
const arr = ["list-A", "list-B"];

const mine = (
    <main>
        <FuncComp /> 
        <hr />
        <ClassComp />
        <MyState />
        <ConsComp />
        <hr />
        <h5>list: </h5>
        <MyList data={arr} />
        <hr />
        <h5>contact list: </h5>
        <ContactManager data={contacts} />
    </main>
)

ReactDOM.render(mine, document.getElementById('root'));