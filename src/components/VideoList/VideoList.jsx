import "./_VideoList.scss";
import Thumbnail from "./Thumbnail/Thumbnail";

const VideoList = (props) => {
  console.log(props);
  return (
    <>
      {props.videoList.map((video) => (
        <Thumbnail key={video.id} video={video} />
      ))}
    </>
  );
};

export default VideoList;
