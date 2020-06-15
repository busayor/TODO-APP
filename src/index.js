import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import JokeApp from './JokeApp';
import ProductApp from './ProductApp';

//This is for the to-do list
//ReactDOM.render(<TodoApp />, document.getElementById('root'))

//This is for the jokes app
//ReactDOM.render(<JokeApp />, document.getElementById('root'))

//This is for the products app
ReactDOM.render(<ProductApp />, document.getElementById('root'))


