import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video-section/Video";
import VideoInfo from "./components/Video-section/VideoInfo/VideoInfo";

function App() {
  return (
    <>
      <Header imageLogo='src/Assets/Images/Logo/BrainFlixLogo.svg' />
      <Video zhopa={4} imageSource='https://i.imgur.com/l2Xfgpl.jpg' />
      <VideoInfo titleName='BMX Rampage: 2021 Highlights' />
    </>
  );
}

export default App;
