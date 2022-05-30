import React from "react";
import siteLogo from "./assets/images/logo/BrainFlixLogo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
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
    this.setState((id) => {
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
          <Route
            path='/'
            render={(props) => (
              <Main props={this.state} handleClick={this.displayVideo} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
