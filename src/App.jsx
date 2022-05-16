import React from "react";
import siteLogo from "./Assets/Images/Logo/BrainFlixLogo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video-section/Video";
import videoDetails from "./Data/video-details.json";
import videos from "./Data/videos.json";
import Main from "./components/Main/Main";
import { filteredVideo } from "./components/helper/Helper";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videoDetails: videoDetails[0],
      videos: videos,
    };
  }
  displayVideo = (event, id) => {
    event.preventDefault();
    const videoUpdate = filteredVideo(videoDetails, id);
    console.log(videoUpdate);
    this.setState((prevState) => {
      return {
        videoDetails: videoUpdate[0],
      };
    });
  };

  render() {
    return (
      <>
        <Header imageLogo={siteLogo} />
        <Video imageSource={this.state.videoDetails.image} />
        <Main
          comments={this.state.videoDetails.comments}
          videoDescription={this.state.videoDetails.description}
          titleName={this.state.videoDetails.title}
          likes={this.state.videoDetails.likes}
          views={this.state.videoDetails.views}
          channel={this.state.videoDetails.channel}
          date={this.state.videoDetails.timestamp}
          postedComments={this.state.videoDetails.comments}
          videoList={this.state.videos}
          handleClick={this.displayVideo}
        />
      </>
    );
  }
}

export default App;
