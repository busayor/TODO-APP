import React, { Component } from 'react';
import ToDoo from './ToDoo';
import todoData from '../Data/todoData';

class TodoApp extends Component {
  render() { 
    const todoComponent = todoData.map(todoo =>{
        return (
          <ToDoo
            key = {todoo.id}
            text={todoo.text} 
            completed={todoo.completed} 
          />
        )
      }
    )
    return ( 
      <div>
          {todoComponent}
      </div>
     );
  }
}
 
export default TodoApp;