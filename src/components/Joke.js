import React, { Component } from 'react';

class Joke extends Component {
    state = {  }
    render() { 
        //console.log(this.props.question)
        return ( 
            
            <div>
                <h3 style={{display: this.props.question ? "block" : "none"}}>Question: {this.props.question}</h3>
                <h3 style={{color: !this.props.question && "red" ,fontSize: 14}}>Answer: {this.props.punchline}</h3>
                <hr/>
            </div>
         );
    }
}
 
export default Joke;