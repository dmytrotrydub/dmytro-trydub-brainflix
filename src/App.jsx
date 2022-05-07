import React from "react";
import siteLogo from "./Assets/Images/Logo/BrainFlixLogo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video-section/Video";
import VideoInfo from "./components/Video-section/VideoInfo/VideoInfo";
import videoDetails from "./Data/video-details.json";
import videos from "./Data/videos.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videoDetails: videoDetails[0],
      videos: videos,
    };
  }
  render() {
    console.log(this.state);
    return (
      <>
        <Header imageLogo={siteLogo} />
        <Video imageSource={this.state.videoDetails.image} />
        <VideoInfo
          comments={this.state.videoDetails.comments}
          videoDescription={this.state.videoDetails.description}
          titleName={this.state.videoDetails.title}
        />
      </>
    );
  }
}

export default App;
