import React, { Component } from 'react';

import './App.css';
import First from './First.js';
import Second from './Second.js';
import Third from './Third.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      viewManager : {
        current: "First",
        previous: ""
      }
    }
  }
  changeviewManager= (value,cb) => {
    var viewManagerData = value;
    viewManagerData.state = "viewManager";
    this.changeNestedState(viewManagerData,cb);
  }

  changeNestedState (value,cb){
    var tempPreLogState = this.state[value.state];
    tempPreLogState[value.key] = value.val;
    var obj = {};
    obj[value.state] = tempPreLogState;
    this.setState(obj,cb);
    //console.log('changing',value.state,'state',value.key,'to',value.val);
  }
  
  render() {
    
      if(this.state.viewManager.current ===  "First"){
       return (
        <First 
          changeviewManager={this.changeviewManager}
          MainFullState={this.state} >        
        </First>
       )
      } else if (this.state.viewManager.current ===  "Second"){
        return (
          <Second 
          changeviewManager={this.changeviewManager}
          MainFullState={this.state} >        
        </Second>
        )
       }  else if (this.state.viewManager.current ===  "Third"){
        return (
          <Third 
          changeviewManager={this.changeviewManager}
          MainFullState={this.state} >        
        </Third>
        )
       } else {
        return null;
      }
    
  }
}

export default App;
