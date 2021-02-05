import React from 'react';

const VideoDetails = (props)=>{
    if(!props.selectedVideo){
        return <div>Loading...</div>
    }
    const src=`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;
    return(<div>
        <div className="ui embed">
                <iframe src={src} title={props.selectedVideo.snippet.title}/>
            </div>
            <div className="ui segment">
            <h4 className="ui header">{props.selectedVideo.snippet.title}</h4>
            <p>{props.selectedVideo.description}</p>
            </div>
    </div>)
}

export default VideoDetails;