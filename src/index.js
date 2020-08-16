import React from 'react';
import ReactDOM from 'react-dom'
import './style.css';

import FuncComp from './myFuncComp';

const mine = (
    <main>
        <FuncComp />    
    </main>
)

ReactDOM.render(mine, document.getElementById('root'));