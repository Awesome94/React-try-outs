import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const Stars = (props) => {
  const numberOfStars = 9;
  let stars = [];
  for (let i=0; i<numberOfStars; i++){
  stars.push(<i className = "fa fa-star"></i>)
  }
  return (
  <div className="col-5">
  {stars}
  </div>
  )
  }
  
  
  const Button = (props) => {
  return(
    <div>
      <button>=</button>
    </div>
  )
  }
  
  const Answer = (props) => { 
    return(
    <div className="col-5">
      {props.selectedNumbers.map((number, i) => 
      <span key={i}>{number}</span>
      )};
    </div>
    );
    }
  // const Numbers = (props) => {
  //   return(
  //   <div>
  //   <span>1</span>
  //   <span>2</span>
  //   <span>3</span>
  //   <span>4</span>
  //   <span>5</span>
  //   </div>
  //   )
  // }
// The numbers above where generated manually. Below we generate them automatically.
  const Numbers = (props) => {
    const numberClassName = (number) => {
    if (props.selectedNumber.indexOf(number) >= 0) {
    return 'selected';
    }
    }
      return(
      <div className = "card text-center">
      <div>
      {Numbers.list.map((number, i) =>
       <span key = {i}>{number}</span>
      )}
     </div>
      </div>
      );
    };
    Numbers.list = _.range(1, 10);
    
  
  class Game extends React.Component{
  render(){
  return(
  <div layout="row">
  <Stars/>
  <Button/>
  <Answer selectedNumber = {this.selectedNumber}/>
  <Numbers selectedNumber = {this.selectedNumber}/>
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
