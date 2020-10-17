import React from 'react';

// class component      [props > string/variable]
class NewC1 extends React.Component {
    render() {
        return <code>{this.props.name} - {this.props.age}</code>;
    }
}

// class component      [props > object]
class NewC2 extends React.Component {
    render() {
        return <code>{this.props.person.name} - {this.props.person.age}</code>;
    }
}

class ClassComp extends React.Component {
    render() {

        const newVar = "22 [variable]";
        const newObj = {name: "third", age: '50 [object]'};
        
        return (
            <div>
                <h4>class component:</h4>
                <div class='box'>
                    <h5>props</h5>
                    <NewC1 name='first' age='44 [stirng]' />                
                    <NewC1 name='second' age={newVar} />
                    <NewC2 person={newObj} />
                </div>
            </div>
        )
    }
}

export default ClassComp;