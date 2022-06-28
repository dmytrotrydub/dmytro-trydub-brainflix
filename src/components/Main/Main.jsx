import "./Main.scss";
import VideoInfo from "./VideoInfo/VideoInfo";
import VideoList from "./VideoList/VideoList";
import Video from "./Video-section/Video";
import React from "react";
import axios from "axios";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoDetails: null,
      videos: null,
    };
  }

  componentDidMount = () => {
    //!creating an object to update the state with it after
    let videoList = null;
    let singleVideo = null;

    const newRequest = "http://localhost:8080/videos";
    const videoRequest = axios.get(`${newRequest}`);
    videoRequest
      //!getting first request for an array of videos
      .then((response) => {
        videoList = response.data;
        this.setState({ videos: videoList });
      });
    //!Getting second request for single video
    const singleVideoRequest = axios.get(`http://localhost:8080/video`);
    singleVideoRequest.then((response) => {
      singleVideo = response.data;
      this.setState({ videoDetails: singleVideo });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    //!Comparing states
    if (
      prevProps.videoData.routerProps.match.params.id !==
      this.props.videoData.routerProps.match.params.id
    ) {
      //!making request for a state update after updating of it
     
      const newRequest = axios.get(

        `http://localhost:8080/videos/${this.props.videoData.routerProps.match.params.id}`
      );
         console.log(this.props.videoData.routerProps.match.params.id);
      newRequest.then((response) => {
        console.log(response);
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
