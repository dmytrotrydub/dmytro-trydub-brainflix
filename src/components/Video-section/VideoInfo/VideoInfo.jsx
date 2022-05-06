import "./_Video-info.scss";
import ActivitySection from "./ActivitySection/ActivitySection";

function VideoInfo(props) {
  return (
    <div className='video-info'>
      <h1 className='video-info__title'>{props.titleName}</h1>
      <ActivitySection author='By Red Crow' />
      {/* <VideoDescription />//! */}
    </div>
  );
}

export default VideoInfo;
