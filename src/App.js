import React, { Component } from 'react';

import './App.css';

import AllVideos from './components/AllVideos';
import InputBar from './components/InputBar';

import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
 
  constructor(props) {
    super(props);
    
    this.state = {
      id: '',
      // videos: [
      //   {id: 1, videoId: "A3ypbwS_eY4"}, 
      //   {id: 2, videoId: "VWoUcB7y4hw"}].concat(props.match.params.id),
      videos: ["A3ypbwS_eY4", "VWoUcB7y4hw"].concat(props.match.params.id),
      isPlayClicked: true
    };

    if(!props.match.params.id) this.setState({videos: this.state.videos.splice(-1)});
  }

  videoAdd(id) {
    this.setState({
      id: id,
      videos: this.state.videos.concat(id)
    });
  }

  render() {
    console.log(this.props.match);
    return (
      <div className="container App">
        <InputBar onIdChange={(id) => this.videoAdd(id)}/>
        <AllVideos 
          videoID={this.state.id} 
          videos={this.state.videos}
          isPlayClicked={this.state.isPlayClicked}
          isPlay={play => this.setState({isPlayClicked: play})} 
          progress={this.props.match.params.progress} 
          />
      </div>
    );
  }
}

export default App;