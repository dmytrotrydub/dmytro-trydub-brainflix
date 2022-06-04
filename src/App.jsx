import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import { filteredVideo } from "./components/helper/Helper";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from './pages/Home/Home';
import VideoUpload from "./pages/Video-Upload/VideoUpload";
import Thumbnail from "./components/Main/VideoList/Thumbnail/Thumbnail";

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   videoDetails: videoDetails[0],
    //   videos: videos,
    // };
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
        <Header/>
        <Switch>
          <Redirect exact from={"/"} to={"/home"} />
          <Route
            path={"/home"}
            render={(props) => <Home props={this.state}/>}
          />
          <Route
            path="/video"
            render={(props) => <Home path='/video' />}
          />
          <Route path="/videoupload" render={(props) => { <VideoUpload /> }} />
          {/* <Route path='/videoupload/:id' render={(props)=>{<Thumbnail/>}}/> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
