import React, { Component } from 'react';
import './App.css';

import AllVideos from './components/AllVideos';
import InputBar from './components/InputBar';
import ControlPanel from './components/ControlPanel';


class App extends Component {
  render() {
    return (
      <div className="container App">
        <InputBar />
        <AllVideos />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
