import React, { Component } from 'react';
import TodoItems from './TodoItems'

class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="todo-list">
                    <TodoItems />
                    <TodoItems />
                    <TodoItems />
            </div>
         );
    }
}
 
export default MainContent;