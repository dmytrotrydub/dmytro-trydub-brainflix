import "./_Main.scss";
import VideoInfo from "./VideoInfo/VideoInfo";
import VideoList from "./VideoList/VideoList";
import { timeConverter } from "../helper/Helper";

const Main = (props) => {
  const convertedTime = timeConverter(props.date);
  return (
    <div className='main'>
      <VideoInfo
        videoDescription={props.videoDescription}
        titleName={props.titleName}
        likes={props.likes}
        views={props.views}
        channel={props.channel}
        date={convertedTime}
        postedComments={props.postedComments}
      />
      <VideoList videoList={props.videoList} handleClick={props.handleClick} />
    </div>
  );
};

export default Main;
