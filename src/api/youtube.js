import axios from 'axios';

const KEY = 'AIzaSyChmfuOeuawJ_peeubbPxkwivq7TIXOW-8';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:25,
        key:KEY,
    }
})


