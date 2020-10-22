import React from 'react';

// state [obj]
class Const1 extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "red",
            age: 21,
            model: 'man'
        };
    }
    render() {
        return <code>state: {this.state.color} --- {this.state.model}</code>
    }
}

// props
class Const2 extends React.Component {
	constructor(props) {
        super();
	}
	render() {
		return <code>props: {this.props.color}</code>
	}
}

class ConsComp extends React.Component {
    render() {
        return (
            <div class='box'>
                <h5>constructor</h5>
                <Const1 />
                <Const2 color="red"/>
            </div>
        )
    }
}

export default ConsComp;