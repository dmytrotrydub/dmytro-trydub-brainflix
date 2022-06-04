import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from './pages/Home/Home';
import VideoUpload from "./pages/Video-Upload/VideoUpload";
// import Thumbnail from "./components/Main/VideoList/Thumbnail/Thumbnail"

class App extends React.Component {



  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect exact from={"/"} to={"/home"} />
          <Route
            path={"/home"}
            render={(props) => <Home props={this.state} routerProps={props} />}
          />
          <Route path='/video/:id' render={(props) => <Home path='/video' routerProps={props} />} />
          <Route
            path='/videoupload'
            render={(props) => {
              <VideoUpload />;
            }}
          />
          {/* <Route path='/videoupload/:id' render={(props)=>{<Thumbnail/>}}/> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
