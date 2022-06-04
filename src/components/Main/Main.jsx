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
    const apiKey = "5cc495db-8a0b-49af-a3a1-aace3f3e699c";
    const singleVideoRequestRoute = this.props.videoData.routerProps.match.params.id;

    const videoRequest = axios.get(`${url}/videos/?api_key=<${apiKey}>`);
    videoRequest.then((response) => {
      this.setState({
        videos: response.data,
      });
    });

    const singleVideoRequest = axios.get(
      `${url}/videos/${singleVideoRequestRoute}?api_key=<${apiKey}>`
    );
    singleVideoRequest.then((response) => {
      console.log(response);
      this.setState({
        videoDetails: response.data,
      });
    });
    
    // // !data convertion
    // const convertedTime = timeConverter(this.state.videoDetails.timestamp);
    // // !---------------
  };


  componentDidUpdate = (prevProps,prevState) => {
    // console.log(prevProps);
    // console.log(this.props);
    
  };

  render() {
    return (
      <div className='main'>
        <Video/>
        <div className='main__video-info'>
          {this.state.videoDetails ? (<VideoInfo
            data = {this.state}
            // date={convertedTime}
            postedComments={this.state.videoDetails.comments}
          />) : null}
          {this.state.videos ? (
            <VideoList videoList={this.state.videos} selectedVideo={this.state.videos[0]} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Main;
