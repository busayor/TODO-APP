import React, { Component } from 'react';
import Joke from "./components/Joke"
import jokesData from './Data/jokesData'

class JokeApp extends Component {
  render() { 
    const jokesComponents = jokesData.map(joke =>{
      return (
        <Joke 
          key = {joke.id}
          question={joke.question} 
          punchline={joke.punchline} 
        />
      )
    }
    )
    return ( 
      <div>
          {jokesComponents}
      </div>
     );
  }
}
 
export default JokeApp;