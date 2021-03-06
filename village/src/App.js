import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import './components/Smurfs.css'
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfDetails from './components/SmurfDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount(){
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      this.setState({
        smurfs: res.data
      });
    })
    .catch(err => {
      console.log(err)
    });
  }

  handleDelete = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res =>
      this.setState({
          smurfs: res.data
      })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
      <div className="nav">
      <NavLink to="/"><h1>Smurfs</h1></NavLink>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </div>
      </div>

        {/* <Smurfs smurfs={this.state.smurfs} /> */}
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} handleDelete={this.handleDelete} />} />
        <Route path="/smurf-form" component={SmurfForm} />
      </div>
    );
  }
}

export default App;
