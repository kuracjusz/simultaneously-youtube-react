import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import YouTubeOneVideo from './YouTubeVideo';


export default class AllVideos extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          playing: false,
          position: props.progress,
          videosDuration: []
        }
        console.log(props.progress);

        // this.handleOnReady = this.handleOnReady.bind(this);
        this.setPosition = this.setPosition.bind(this);
    }

    // onStateChange = (play) => {
    //     this.setState({playing: play});
    // }

    togglePlay = () => {
        this.setState({playing: !this.state.playing});
        // this.setState(state => ({
        //     playing: !this.state.playing
        //   }));
    }

    setPosition(position) {
        this.setState({position});
    }

    componentDidMount() {
        if(this.props.progress) {
            this.setState({position: this.props.progress});
        }
    }

    render() {
        console.log(this.state.position)
        const maxDuration = Math.max(...this.state.videosDuration);
        return (
            <div>
                <div className="row d-flex justify-content-center allVideos">
                    {this.props.videos.map((video, index) => {
                        return (
                            <YouTubeOneVideo 
                                className="col" 
                                Id={video} 
                                key={index}
                                // id={index} 
                                // isPlay={play => this.onStateChange(play)}
                                value={this.state.playing}
                                sendPosition={this.state.position}
                                // grabPosition={play => this.setState({position: play})}
                                grabDuration={duration => this.setState({duration: this.state.videosDuration.push(duration)})}
                            />
                        );
                    })}
                </div>
                        
                <button className="btn btn-primary playPauseButton" onClick={this.togglePlay}>
                    {this.state.playing ? "Pause" : "Play"}
                </button>
                <div className="progressBar">
                    <Slider
                        range={false}
                        max={maxDuration}
                        value={this.state.position}
                        onChange={position => { this.setPosition(position) }}
                        // onRangeClick={position => { this.setPosition(position) }} 
                        />
                </div>
            </div>
        );
    }
}