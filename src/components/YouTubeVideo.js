import React, {Component} from 'react';
import YouTube from 'react-youtube';

import YouTubeVideo from "stateful-react-youtube";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


export default class YouTubeOneVideo extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          playing: this.props.value,
          currentVideo: 0,
          position: this.props.position,
          duration: this.props.duration
        };

        this.onPlayingChange = this.onPlayingChange.bind(this);
        this.handleOnReady = this.handleOnReady.bind(this);
        this.setPosition = this.setPosition.bind(this);
    }


    onPlayingChange = (playing) => {
        this.setState({playing});
        this.props.isPlay(this.state.playing);
    }

    handleOnReady({ duration }) {
        this.setState({duration});
        // this.props.grabDuration(this.state.duration);
    }

    setPosition(position) {
        this.setState({position});
        // this.props.grabPosition(this.state.position);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({playing: nextProps.value});
        // this.setState({position: nextProps.position});
        // this.setState({duration: nextProps.duration});
    }


    render() {
        return (
            <div className="oneVideo">
                <YouTubeVideo
                    position={this.state.position}
                    videoId={this.props.Id}
                    playing={this.state.playing}
                    volume={this.state.volume}
                    shouldPrestart={true}
                    width= "320"
                    height= "195"
                    playerVars={{
                        controls: 1,
                        modestbranding: 1,
                        showinfo: 0,
                        disablekb: 1,
                        enablejsapi: 1,
                        fs: 0,
                        autohide: 2,
                      }}
                    
                    onPlayingChange={this.onPlayingChange}
                    onReady={this.handleOnReady}
                    onProgress={this.setPosition}
                    onVolumeChange={this.handleVolumeChange}>
                </YouTubeVideo>
                    <Slider 
                        range={false}
                        max={this.state.duration}
                        value={this.state.position}
                        onChange={position => { this.state.duration && this.setPosition(position) }}
                        onRangeClick={position => { this.state.duration && this.setPosition(position) }} />
            </div>
        );
    }
}