import "./Main.scss";
import VideoInfo from "./VideoInfo/VideoInfo";
import VideoList from "./VideoList/VideoList";
import { timeConverter } from "../helper/Helper";
import Video from "./Video-section/Video";
import React from "react";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      videoDetails: null,
      videos: null,
    };
  }

  // const convertedTime = timeConverter(props.data.videoDetails.timestamp);
  componentDidMount = () => {
    const url = "https://project-2-api.herokuapp.com";
    const apiKey = "5cc495db-8a0b-49af-a3a1-aace3f3e699c";

    const videoRequest = axios.get(`${url}/videos/?api_key=<${apiKey}>`);
    videoRequest.then((response) => {
      this.setState({
        videos: response.data,
        // videoId:response.data[0].id
      })
    })  
  };


  componentDidUpdate = (prevState) => {
    if (prevState.videoId !== this.state.videoId) {
      const url = "https://project-2-api.herokuapp.com";
      const apiKey = "5cc495db-8a0b-49af-a3a1-aace3f3e699c";

      const chosenVideoRequest = axios.get(`${url}/videos/:${prevState.id}/?api_key=<${apiKey}>`);
      // console.log(chosenVideoRequest);
      chosenVideoRequest.then((response) => {
        console.log(response);
        this.setState({video:response})
      });
    }
  };

  render() {
    return (
      <div className='main'>
        <Video/>
        <div className='main__video-info'>
          {/* <VideoInfo
          // videoDescription={this.state.chosenVideo}
          // titleName={this.state.chosenVideo.title}
          // likes={this.state.chosenVideo.likes}
          // views={props.data.videoDetails.views}
          // channel={props.data.videoDetails.channel}
          // date={convertedTime}
          // postedComments={props.data.videoDetails.comments}
          /> */}
          {this.state.videos ? (
            <VideoList videoList={this.state.videos} selectedVideo={this.state.videos[0]} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Main;
