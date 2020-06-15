import React, { Component } from 'react';

class ToDoo extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>Task: {this.props.text}</h2>
                <h3>Done: {this.props.completed}</h3>
                <hr/>
            </div>
         );
    }
}
 
export default ToDoo;