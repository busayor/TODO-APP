import React, { Component } from 'react';

const AppName = 'To-do App';
class Header extends Component {
    
    render() { 
        return ( 
            <div>
                <header className="navbar">Welcome to my {`${AppName}`}</header>
            </div> 
         );
    }
}
 
export default Header;