import React from 'react';

// state - setState -
class MyState extends React.Component {

    // without  consturctor
    state = {c1: "white", c2: "red", age: 400};
    
    // changing state with an event [onClick]
    changeColor = () => {this.setState({c1: this.state.c2, age: 100});}

    render() {
        const color = {color: this.state.c1};
        return (
            <div>
                <div class='box'>
                <h5>state</h5>
                <code style={color}>{this.state.age}</code>
                <button type='button' onClick={this.changeColor} >change</button>
                </div>
            </div>
        )
    }
}

export default MyState;