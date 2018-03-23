import React from 'react';
import YouTube from 'react-youtube';



export default (props) => {
    const opts = {
        height: '195',
        width: '320',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

    return (
        <div className="oneVideo">
            <YouTube
                videoId={props.Id}
                opts={opts}
                onReady={e => onReady(e)}
            />
        </div>
    );
}

function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
}