import "./_Video-info.scss";
import ActivitySection from "./ActivitySection/ActivitySection";
import VideoDescription from "./ActivitySection/VideoDesctiption";

function VideoInfo(props) {
  console.log(props);
  return (
    <div className='video-info'>
      <h2 className='video-info__title'>{props.titleName}</h2>
      <ActivitySection />
      <VideoDescription
        comments={props.comments.length}
        videoDescription={props.videoDescription}
      />
    </div>
  );
}

export default VideoInfo;
