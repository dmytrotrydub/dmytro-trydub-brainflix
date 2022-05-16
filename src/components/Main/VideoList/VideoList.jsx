import "./_VideoList.scss";
import Thumbnail from "./Thumbnail/Thumbnail";

const VideoList = (props) => {
  return (
    <div className='video-list'>
      <h5 className='video-list__heading'>NEXT VIDEOS</h5>
      {props.videoList.map((video) => (
        <Thumbnail
          handleClick={props.handleClick}
          key={video.id}
          video={video}
        />
      ))}
    </div>
  );
};

export default VideoList;
