import React from 'react';
import axios from 'axios';
import {Video} from "./Video/Video";

class Videolist extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    videos: [],
  };

  componentDidMount() {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&videoEmbeddable=true&fields=items(id(videoId)%2Csnippet(title%2Cthumbnails(default)%2CchannelTitle))&key=AIzaSyARY1OOyWskLUYNUFjlR-2uBK59x-vF6U4&q=`).then(res => {

      console.log(res);
      this.setState({videos: res.data.items});

    });
  }

  render(props) {
    return (
      <ul>
        {this.state.videos
          .filter((video) => video.snippet.title.includes(this.props.searchValue))
          .map((video, i) =>
          <Video key={i}
                 title = {video.snippet.title}
                 video = {video.id.videoId}
          >

        </Video>)}
      </ul>
    )
  }

}

export default Videolist;