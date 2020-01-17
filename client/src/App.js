import React from 'react';
import axios from 'axios';

import './App.css';
import PlayerCard from './components/PlayerCard';
import Nav from './components/nav';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      players:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(r =>{  console.log(r.data)
      this.setState({ players: r.data})
    })
    .catch(e => {console.log(e)})
  }
  render(){
    return(
      <div>
        <Nav />
        <PlayerCard players={this.state.players} />{/* i forgot this again and got stuck for a hot min */}
      </div>
      )
  }
}

export default App;
