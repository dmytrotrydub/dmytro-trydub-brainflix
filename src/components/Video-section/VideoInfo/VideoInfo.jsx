import "../../../styles/partials/Video-section/Video-info/_Video-info.scss";
import props from "../../../App";

function VideoInfo(props) {
  return (
    <div className='video-info'>
      <h1 className='video-info__title'>{props.titleName}</h1>
    </div>
  );
}

export default VideoInfo;
