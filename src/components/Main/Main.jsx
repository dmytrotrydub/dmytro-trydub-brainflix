import "./_Main.scss";
import VideoInfo from "./VideoInfo/VideoInfo";
import VideoList from "./VideoList/VideoList";
import { timeConverter } from "../helper/Helper";
import Video from "./Video-section/Video";

const Main = (props) => {
  console.log(props);
  const convertedTime = timeConverter(props.props.videoDetails.timestamp);
  console.log(props.props.videoDetails.timestamp);
  return (
    <div className='main'>
      <Video image={props.props.videoDetails.image} />
      <VideoInfo
        videoDescription={props.props.videoDetails.description}
        titleName={props.props.videoDetails.title}
        likes={props.props.videoDetails.likes}
        views={props.props.videoDetails.views}
        channel={props.props.videoDetails.channel}
        date={convertedTime}
        postedComments={props.props.videoDetails.comments}
      />
      <VideoList
        videoList={props.props.videos}
        handleClick={props.handleClick}
      />
    </div>
  );
};

export default Main;
