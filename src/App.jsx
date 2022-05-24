import React from "react";
import siteLogo from "./Assets/Images/Logo/BrainFlixLogo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Main/Video-section/Video";
import videoDetails from "./Data/video-details.json";
import videos from "./Data/videos.json";
import Main from "./components/Main/Main";
import { filteredVideo } from "./components/helper/Helper";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
    this.setState((prevState) => {
      return {
        videoDetails: videoUpdate[0],
      };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Header imageLogo={siteLogo} />

        <Switch>
          <Route path='/' component={Main} />
        </Switch>
        {/* <Main props={this.state} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
