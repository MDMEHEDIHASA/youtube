import React from 'react';
import './VideoItem.css';



const VideoItem = (props)=>{
    
    return(
        <div className="video-item item" onClick={(e)=>{props.onClickVideo(props.video)}}>
            <img className="ui image"
            src={props.video.snippet.thumbnails.default.url} alt={props.video.snippet.description} key={props.video.id.videoId}/>
            <div  className="content">
            <div className="header">{props.video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;