import React from 'react';

import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      players:{}
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(r =>{  console.log(r)
      this.setState({ players: r})
    })
    .catch(e => {console.log(e)})
  }
  render(){
    return(
      <div></div>
      )
  }
}

export default App;
