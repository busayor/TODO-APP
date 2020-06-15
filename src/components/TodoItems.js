import React, { Component } from 'react';

class TodoItems extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <input type="checkbox" className="todo-item"/>
                <p>Place holder text here</p>
            </form>
         );
    }
}
 
export default TodoItems;