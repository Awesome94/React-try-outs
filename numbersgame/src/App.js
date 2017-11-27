import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const Stars = (props) => {
  return (
  <div>
  <i className = "fa fa-star"></i>
  <i className = "fa fa-star"></i>
  <i className = "fa fa-star"></i>
  <i className = "fa fa-star"></i>
  <i className = "fa fa-star"></i>
  
  </div>
  )
  }
  
  const Button = (props) => {
  return(
    <div>
      <button>Equals</button>
    </div>
  )
  }
  
  const Answer = (props) => { 
  return(
  <div>
    answer
  </div>
  );
  }
  const Numbers = (props) => {
    return(
    <div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    </div>
    )
  }
  
  class Game extends React.Component{
  render(){
  return(
  <div layout="row">
  <Stars/>
  <Button/>
  <Answer/>
  <Numbers/>
  </div>
  );
  }
  }
  
  class App extends React.Component {
  render(){
  return(
  <div>
  <Game/>
  </div>
  )
  }
  }

export default App;
