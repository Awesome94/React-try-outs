import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const Stars = (props) => {
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
      state = {
      selectedNumbers: [],
      randomNumberOfStars: 1 + Math.floor(Math.random()*9),
      usedNumbers: [],
      answerIsCorrect: null,
      };
      
      selectNumber = (clickedNumber) => {
      if (this.state.selectedNumbers.indexOf(clickedNumber) >=0) {return;}
      this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
      }));
      };
      
      unselectNumber = (clickedNumber) => {
      this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers
      .filter(number => number !== clickedNumber)
      }));
      };
      
      checkAnswer = () => {
      this.setState(prevSate => ({
      answerIsCorrect: prevSate.randomNumberOfStars === prevSate.selectedNumbers.reduce((acc, n) => acc+n, 0)
        }));
      };
      
      render(){
      //const { selectedNumbers, randomNumberOfStars } = this.state;
      return(
      <div className="container">
      <h3>Play Nine</h3>
      <div className="row">
      <Stars numberOfStars={this.state.randomNumberOfStars}/>
      <Button selectedNumbers={this.state.selectedNumbers}
              checkAnswer={this.checkAnswer}
              answerIsCorrect={this.state.answerIsCorrect}/>
      <Answer selectedNumbers={this.state.selectedNumbers} 
      unselectNumber = {this.unselectNumber}/>
      </div>
      <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectNumber}/>
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
