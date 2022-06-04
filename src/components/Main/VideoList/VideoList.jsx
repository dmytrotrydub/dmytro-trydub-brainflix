import "./VideoList.scss";
import Thumbnail from "./Thumbnail/Thumbnail";
import { Link } from "react-router-dom";

const VideoList = (props) => {
  // console.log(props);
  const videoList = props.videoList
    .filter((video) => {
      return video.id !== props.selectedVideo.id;
    })
    .map((video) => (

      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/video/${video.id}`}
        key={video.id}
      >
        <Thumbnail video={video} />
      </Link >
        
    ));

  return (
    <div className='video-list'>
      <h5 className='video-list__heading'>NEXT VIDEOS</h5>
      <div>{videoList}</div>
    </div>
  );
};

export default VideoList;
