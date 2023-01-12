
import React, { Component } from 'react'
import './Func.css';
export class Funccomp extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='func'>
         
         <div>
         <h1>This is the creating using Functional Component</h1>
         <p>This is done using external CSS</p>
         <p className='para'>This is done using inline CSS</p>
         </div>
      </div>
      
    )
  }
}

export default Funccomp
