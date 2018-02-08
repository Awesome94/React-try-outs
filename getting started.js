// React has got components and these can be classified as class based components and fucntional components.

// Functional Components.
const MyComponent = (props) => {
    return (
        <elementOrComponent .../>
    )
}
// Class Components. 

class MyComponent extends React.component{
    render() {
        return (
            <elementOrComponent .../>
        )
    }
}
//when the state of the react component changes react will re-render the component 
// state can be changed and props are fixed values.

//React can be used with or without jsx
class Hello extends React.component {
    render(){
        return(
            <div className="container">
            <h1>Getting started</h1>
            </div>
        );
    }
}
ReactDOM.render(<Hello/>, mountNode);

//this code can be replaced with
React.createElement("div", { className: "container"},
React.createElement("h1", null, "Getting started"))

//The code above in the div tags is jsx code.above

//Basically, it can be concluded that the React.createElement(<elementName>, <className>, <elementLabel>)
// component properties are immutable 
// functional componenmts cannot have state
// to use a sate on a componemnt, we need to initialize it first. and to do that we need to use a constructior in the button class 
//Constructor function takes in a props object. ie. constructor(props)
//call super(props) to honur inheritance of the component.
//intialise this.state to whatever u want. i.e. this.state  {counter: 0}; 
//the keyword this refers to the component instance.

class Button extends React.Component {
state = {counter: 12};

	handleClick = () => {
  this.setState((prevState) => ({
  		counter:prevState.counter+1
      
//   Alternatively if its not that serious u can use the code below.
  // this.setState({
	// counter: this.state.counter + 1
	// });
  }));
};
	render() {
		return(
			<button onClick = {this.handleClick}>{this.state.counter}</button>
		);
	}
}

ReactDOM.render(<Button/>, mountNode);

class Button extends React.Component {

	handleClick = () => {this.props.incrementFunction(this.props.incrementValue)
      
//   Alternatively if its not that serious u can use the code below.
  // this.setState({
	// counter: this.state.counter + 1
	// });
  }
  //));
//};
	render() {
		return(
			<button onClick ={this.handleClick}>+{this.props.incrementValue}</button>
		);
	}
}

const Result = (props) =>{
return(
<div>{props.newcount}</div>
	);
};

class App extends React.Component {
state = {counter: 12};

incrementCounter = (incrementValue) => {
	this.setState((prevState) => ({
  	counter:prevState.counter+incrementValue
  }));
};

render(){
	return(
  <div>
  <Button incrementValue = {1} incrementFunction = {this.incrementCounter}/>
  <Button incrementValue = {10} incrementFunction = {this.incrementCounter}/>
  <Button incrementValue = {15} incrementFunction = {this.incrementCounter}/>
  <Button incrementValue = {20} incrementFunction = {this.incrementCounter}/>
  <Result incrementValue = {30} newcount = {this.state.counter}/>
  </div>
  );
};
};

ReactDOM.render(<App/>, mountNode);

