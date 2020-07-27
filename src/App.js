import React, { Component } from 'react';
import Timekeeper from './components/Timekeeper';
import AddClick from './components/AddClick';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    Timekeeper: []
  };

  componentDidMount() {
    axios
    .get('https://jsonplaceholder.typicode.com/Timekeeper?_limit=10')
    .then(res => this.setState({Timekeeper: res.data}));
  }
}

render () {
  return (
    <Router>
      <div className="App">
      <div className="container">
      <Timekeeper/>
      <Router
      exact
      path="/"
      render={props =>(
        <React.Fragment>
          <AddClick AddClick={this.AddClick}/>
          <Timekeeper
          Timekeeper={this.state.Timekeeper}
          />
        </React.Fragment>
      )}
      />
      <Route path="/about" component={About} />
      </div>
      </div>
    </Router>
  );
      }
    };
  

export default App;
