import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Game extends Component {
    render(){
        return(
            <div className = "Game">
               <div className="grid">
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
               <div className="cell" style={{ width: '25%' }}></div>
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
