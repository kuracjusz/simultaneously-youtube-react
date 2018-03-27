import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import YouTubeOneVideo from './YouTubeVideo';


export default class AllVideos extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          playing: false,
          position: 0,
          duration: 0
        }

        this.handleOnReady = this.handleOnReady.bind(this);
        this.setPosition = this.setPosition.bind(this);
    }

    onStateChange = (play) => {
        this.setState({playing: play});
    }

    togglePlay = () => {
        this.setState({playing: !this.state.playing});
        this.setState(state => ({
            playing: !this.state.playing
          }));
    }
    
    handleOnReady({ duration }) {
        this.setState({duration});
    }

    setPosition(position) {
        this.setState({position});
    }

    render() {
        return (
            <div>
                <div className="row d-flex justify-content-center allVideos">
                    {/* <YouTubeVideo className="col" Id="A3ypbwS_eY4" /> */}
                    {/* <YouTubeVideo className="col" Id="CC5ca6Hsb2Q" />
                    <YouTubeVideo className="col" Id="NlXTv5Ondgs" />
                    <YouTubeVideo className="col" Id="VWoUcB7y4hw" /> */}
                    {this.props.videos.map((video, key) => {
                        return (
                            <YouTubeOneVideo 
                                className="col" 
                                Id={video} 
                                key={key} 
                                isPlay={play => this.onStateChange(play)}
                                value={this.state.playing}
                                grabPosition={play => this.setState({position: play})}
                                grabDuration={play => this.setState({duration: play})}
                                position={this.state.position}
                                duration={this.state.duration} />
                        );
                    })}
                </div>
                        
                <button className="btn btn-primary playPauseButton" onClick={this.togglePlay}>
                    {this.state.playing ? "Pause" : "Play"}
                </button>
                <div className="progressBar">
                    <Slider
                        range={false}
                        max={this.state.duration}
                        value={this.state.position}
                        onChange={position => { this.state.duration && this.setPosition(position) }}
                        onRangeClick={position => { this.state.duration && this.setPosition(position) }} />
                </div>
            </div>
        );
    }
}