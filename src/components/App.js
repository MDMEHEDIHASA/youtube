import React from 'react';
import SearchList from './SearchList';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component{
    state={videos:[],selectedVideo:null}
    componentDidMount(){
        this.onSearchSubmit('movies');
    }
    onClickVideo=(video)=>{
        this.setState({selectedVideo:video});
        console.log(video);
    }
    onSearchSubmit= async(term)=>{
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        })
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0],
        });
        console.log(response.data.items);
        //console.log(term);
    }
    render(){
        return (
            <div className="ui container">
                <SearchList childToParent={this.onSearchSubmit}/>
                <div className="ui grid" >
                <div className="ui row">
                <div className="eleven wide column">
                <VideoDetails selectedVideo={this.state.selectedVideo}/>
                </div>
                <div className="five wide column"> <VideoList VIDEOS={this.state.videos} onClickVideo={this.onClickVideo}/></div>
                </div>
                </div>
            </div>
        );
    }
    
}

export default App;