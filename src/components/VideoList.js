import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props)=>{
    const VDS = props.VIDEOS.map(video=>{
        return(
        <VideoItem video={video} key={video.id.videoId} onClickVideo={props.onClickVideo}/>
        
        );
    })
    return(
        <div  className="ui relaxed divided list ">
            {VDS}
        </div>
    );
}

export default VideoList;