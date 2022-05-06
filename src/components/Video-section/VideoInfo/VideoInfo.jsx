import "./_Video-info.scss";
import ActivitySection from "./ActivitySection/ActivitySection";
import VideoDescription from "./ActivitySection/VideoDesctiption";

function VideoInfo(props) {
  const activityProps = {
    author: "By Red Crow",
    date: "07/11/2021",
  };
  return (
    <div className='video-info'>
      <h2 className='video-info__title'>{props.titleName}</h2>
      <ActivitySection
        author={activityProps.author}
        date={activityProps.date}
        viewsImgAlt={activityProps.viewsImgAlt}
        viewsAmount={activityProps.viewsAmount}
        likesImgAlt={activityProps.likesImgAlt}
        likesAmount={activityProps.likesAmount}
      />
      <VideoDescription />
    </div>
  );
}

export default VideoInfo;
