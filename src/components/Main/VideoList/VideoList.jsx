import "./VideoList.scss";
import Thumbnail from "./Thumbnail/Thumbnail";

const VideoList = (props) => {
  console.log(props.selectedVideo.id);
  // let temp = props.videoList.splice(-1, 1);
  // console.log(temp);
  return (
    <div className='video-list'>
      <h5 className='video-list__heading'>NEXT VIDEOS</h5>
      {props.videoList.map((video) => (

        <Thumbnail
          handleClick={props.handleClick}
          key={video.id}
          video={video}
        />
      )).filter()}
    </div>
  );
};

export default VideoList;
