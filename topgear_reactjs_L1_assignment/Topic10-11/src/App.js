import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(){
    super();

    this.show = this.show.bind(this);

    this.state = {
        math : 0,
        phys : 0,
        chem : 0,
        bio : 0
    }
  }
  show(){
    const avg = (parseInt(this.state.math) + parseInt(this.state.phys) + parseInt(this.state.chem) + parseInt(this.state.bio)) / 4;
    alert(`Average of all four subject is ${avg}` );
    
  }

  render() {
    return (
      <div className='topic10'>
        <form>
          <div>
            <label>Mathematics</label><br/>
            <input type="number" placeholder='Mathematics' onChange={(e) => {this.setState({math : e.target.value})}} />
          </div>
          <div>
            <label>Physics</label><br/>
            <input type="number" placeholder='Physics' onChange={(e) => {this.setState({phys : e.target.value})}}/>
          </div>
          <div>
            <label>Chemistry</label><br/>
            <input type="number" placeholder='Chemistry' onChange={(e) => {this.setState({chem : e.target.value})}}/>
          </div>
          <div>
            <label>Biology</label><br/>
            <input type="number" placeholder='Biology' onChange={(e) => {this.setState({bio : e.target.value})}}/>
          </div>
          <input type="submit" value="Find Average" onClick={this.show}/>
        </form>
      </div>
    )
  }
}
