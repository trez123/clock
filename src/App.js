import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faPause, faPlay, faReply } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25
    }

    this.breakLengthIncrease = this.breakLengthIncrease.bind(this);
    this.breakLengthDecrease = this.breakLengthDecrease.bind(this);
    this.sessionLengthIncrease = this.sessionLengthIncrease.bind(this);
    this.sessionLengthDecrease = this.sessionLengthDecrease.bind(this);
    this.reset= this.reset.bind(this);
  }

  breakLengthIncrease(){
    if(this.state.breakLength <= 60 ){
      this.setState(state => ({
        breakLength: state.breakLength + 1
      }))
    }
  }

  breakLengthDecrease(){
    if(this.state.breakLength > 1 ){
      this.setState(state => ({
        breakLength: state.breakLength - 1
      }))
    }
  }

  sessionLengthIncrease(){
    if(this.state.sessionLength <= 60 ){
      this.setState(state => ({
        sessionLength: state.sessionLength + 1
      }))
    }
  }

  sessionLengthDecrease(){
    if(this.state.sessionLength > 1 ){
      this.setState(state => ({
        sessionLength: state.sessionLength - 1
      }))
    }
  }

  reset(){
    this.setState({
      breakLength: 5,
      sessionLength: 25
    })
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
         <div>
          <h1>25 + 5 Clock</h1>
          <div className='Length-container'>
            <div>
            <h1>Break Length</h1> 
            <h1> <FontAwesomeIcon icon={faArrowUp} onClick={this.breakLengthIncrease} className='Control'/> {this.state.breakLength} <FontAwesomeIcon icon={faArrowDown} onClick={this.breakLengthDecrease} className='Control'/> </h1>
            </div>
            <div><h1>Session Length</h1>  
            <h1> <FontAwesomeIcon icon={faArrowUp} onClick={this.sessionLengthIncrease} className='Control'/> {this.state.sessionLength} <FontAwesomeIcon icon={faArrowDown} onClick={this.sessionLengthDecrease} className='Control'/> </h1> </div>
          </div>
          <div className='Display'>
            <h1>Session</h1>
            <h1>{this.state.sessionLength}:00</h1>
          </div>
          <div className='Controls'>
          <FontAwesomeIcon icon={faPlay}/>
          <FontAwesomeIcon icon={faPause}/>
          <FontAwesomeIcon icon={faReply} className='Replay'/>
          </div>
         </div>
         <p>Designed and Coded By <br/><span className='Silas'>Silas Coley</span></p>
        </div>
      </div>
    );
  }
}

export default App;
