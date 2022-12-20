import './App.css';
import Counter from './counter';
import Logo from './logo';



import React, { Component } from 'react'

class App extends Component {
  state={
    total :0
    
  }
  sumTotal =(countValue)=>{
    this.setState((prevState)=>{
    if(prevState.total>= 0) return {total : prevState.total +countValue} ;
    })
  }
  render() {
    return (
      <div>
        < Logo />
        <Counter getTotal ={this.sumTotal}  />
        <Counter getTotal ={this.sumTotal}  />
        <Counter getTotal ={this.sumTotal}  />
        <Counter getTotal ={this.sumTotal}  />
        


        <div className='totalValues'>
          {this.state.total}
        </div>
        
      </div>
    )
  }
}



export default App;
