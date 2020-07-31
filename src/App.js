import React from 'react';
import './App.css'
let green = '#39D1B4';
let yellow = '#FFD712';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      count : "click me",
      color: green
    }
  }
  handleClick = () => {
    let letters = '0123456789ABCDEF';
    let rainbow = '#';
    for (let i = 0; i < 6; i++ ) {
      rainbow += letters[Math.floor(Math.random() * 16)];
    }
    this.setState(({ count }) => ({
      count: 'I been changed',
      color: rainbow
    }));
  };
render(){
  return (
    <div className="App">
   <button style={{background: this.state.color}} type="button"
   onClick={this.handleClick}
   >
   {this.state.count}
   </button>
   <h1 style={{color: this.state.color}}
   onClick={this.handleClick}> look at me now</h1>
    </div>
  );
}
}
export default App;