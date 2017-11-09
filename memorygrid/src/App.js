import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Cell extends Component{
  render(){
    return(
      <div className = "cell" style = {{ width:'20%' }}></div>
    )
  }
};

class Game extends Component {
    render(){
        return(
            <div className = "Game">
               <div className="grid">
                <Cell/><Cell/><Cell/><Cell/> 
                <Cell/><Cell/><Cell/><Cell/> 
                <Cell/><Cell/><Cell/><Cell/> 
                <Cell/><Cell/><Cell/><Cell/> 
                </div>
                <button>
                Start Game.
                </button>
                <div className = "message">Game message here... </div>
            </div>
        );
    }
}

export default Game;
