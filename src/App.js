import React, { Component } from 'react';
import './App.css';
import DwvComponent from './DcwFileReaderComponent';

class App extends Component {
  render() {
    return (
        <div className="App">
          <DwvComponent />
        </div>
    );
  }
}

export default App;
