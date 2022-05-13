import React from "react";
import siteLogo from "./Assets/Images/Logo/BrainFlixLogo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video-section/Video";
import VideoInfo from "./components/Video-section/VideoInfo/VideoInfo";
import videoDetails from "./Data/video-details.json";
import videos from "./Data/videos.json";
import VideoList from "./components/VideoList/VideoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videoDetails: videoDetails[0],
      videos: videos,
    };
  }
  render() {
    //*Getting date
    const timestamp = parseInt(this.state.videoDetails.timestamp);
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const fullDate = `${month}/${day}/${year}`;
    this.state.fullDate = fullDate;
    //*---------------------------------

    return (
      <>
        <Header imageLogo={siteLogo} />
        <Video imageSource={this.state.videoDetails.image} />
        <VideoInfo
          comments={this.state.videoDetails.comments.length}
          videoDescription={this.state.videoDetails.description}
          titleName={this.state.videoDetails.title}
          likes={this.state.videoDetails.likes}
          views={this.state.videoDetails.views}
          channel={this.state.videoDetails.channel}
          date={this.state.fullDate}
          postedComments={this.state.videoDetails.comments}
        />
        <VideoList videoList={this.state.videos} />
      </>
    );
  }
}

export default App;
