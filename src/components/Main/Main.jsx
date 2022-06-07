import "./Main.scss";
import VideoInfo from "./VideoInfo/VideoInfo";
import VideoList from "./VideoList/VideoList";
// import { timeConverter } from "../helper/Helper";
import Video from "./Video-section/Video";
import React from "react";
import axios from "axios";
// import { timeConverter} from "../helper/Helper";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoDetails: null,
      videos: null,
    };
  }

  componentDidMount = () => {
    const url = "https://project-2-api.herokuapp.com";
    const apiKey = "91cf2af5-8d83-43f3-9997-f3c637393ce0";
    // console.log(singleVideoRequestRoute);
    //!creating an object to update the state with it after
    let videoList = null
    let singleVideo = null

    const videoRequest = axios.get(`${url}/videos/?api_key=<${apiKey}>`);
    videoRequest
      //!getting first request for an array of videos
      .then((response) => {
        videoList = response.data;
        this.setState({videos:videoList});
      })
      //!Getting second request for single video
      .then((response) => {
        const singleVideoRequest = axios.get(
          `${url}/videos/${videoList[0].id}?api_key=<${apiKey}>`
        );
        singleVideoRequest.then((response) => {
          singleVideo = response.data;
          this.setState({videoDetails:singleVideo})
        });
      });
    
  
  };

  componentDidUpdate = (prevProps, prevState) => {
    //!Comparing states
    if (
      prevProps.videoData.routerProps.match.params.id !==
      this.props.videoData.routerProps.match.params.id
    ) {
      //!making request for a state update after updating of it
      const url = "https://project-2-api.herokuapp.com";
      const apiKey = "91cf2af5-8d83-43f3-9997-f3c637393ce0";
      const newRequest = axios.get(
        `${url}/videos/${this.props.videoData.routerProps.match.params.id}?api_key=<${apiKey}>`
      );

      newRequest.then((response) => {
        this.setState({
          ...prevState,
          videoDetails: response.data,
        });
      });
    }
  };

  render() {
    return (
      <div className='main'>
        {this.state.videoDetails ? <Video image={this.state.videoDetails.image} /> : null}
        <div className='main__video-info'>
          {this.state.videoDetails ? (
            <VideoInfo
              videoDescription={this.state.videoDetails}
              titleName={this.state.videoDetails.title}
              likes={this.state.videoDetails.likes}
              views={this.state.videoDetails.views}
              channel={this.state.videoDetails.channel}
              // date={convertedTime}
              postedComments={this.state.videoDetails.comments}
            />
          ) : null}
          {this.state.videos ? (
            <VideoList videoList={this.state.videos} selectedVideo={this.state.videos[0]} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Main;
