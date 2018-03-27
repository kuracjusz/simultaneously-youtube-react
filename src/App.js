import React, { Component } from 'react';
import './App.css';

import AllVideos from './components/AllVideos';
import InputBar from './components/InputBar';


class App extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      videos: ["A3ypbwS_eY4", "VWoUcB7y4hw"],
      isPlayClicked: true
    };
  }

  videoAdd(id) {
    this.setState({
      id: id,
      videos: this.state.videos.concat(id)
    });
  }

  render() {
    return (
      <div className="container App">
        <InputBar onIdChange={(id) => this.videoAdd(id)}/>
        <AllVideos 
          videoID={this.state.id} 
          videos={this.state.videos}
          isPlayClicked={this.state.isPlayClicked}
          isPlay={play => this.setState({isPlayClicked: play})} />
      </div>
    );
  }
}

export default App;
