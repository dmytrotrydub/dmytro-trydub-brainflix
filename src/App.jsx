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
      videoDetails: videoDetails,
      videos: videos,
    };
  }
  render() {
    //*Getting date
    const timestamp = parseInt(this.state.videoDetails[0].timestamp);
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const fullDate = `${month}/${day}/${year}`;
    this.state.fullDate = fullDate;
    //*-----------

    return (
      <>
        <Header imageLogo={siteLogo} />
        <Video imageSource={this.state.videoDetails[0].image} />
        <VideoInfo
          comments={this.state.videoDetails[0].comments.length}
          videoDescription={this.state.videoDetails[0].description}
          titleName={this.state.videoDetails[0].title}
          likes={this.state.videoDetails[0].likes}
          views={this.state.videoDetails[0].views}
          channel={this.state.videoDetails[0].channel}
          date={this.state.fullDate}
          postedComments={this.state.videoDetails[0].comments}
        />
      </>
    );
  }
}

export default App;
