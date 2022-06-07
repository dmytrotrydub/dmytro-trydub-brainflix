import "./Video-info.scss";
import ActivitySection from "./ActivitySection/ActivitySection";
import VideoDescription from "./ActivitySection/VideoDescription/VideoDesctiption";
import CommentForm from "./ActivitySection/CommentForm/CommentForm";
import PostedComments from "./ActivitySection/PostedComments/PostedComments";
import {timeConverter} from "../../helper/Helper";

function VideoInfo(props) {
  // !data convertion
  const convertedTime = timeConverter(props.videoDescription.timestamp);
  // !---------------]
  return (
    <div className='video-info'>
      <h1 className='video-info__title'>{props.title}</h1>
      <ActivitySection
        channel={props.channel}
        likes={props.likes}
        views={props.views}
        date={convertedTime}
      />
      <VideoDescription
        videoDescription={props.videoDescription}
        commented={props.postedComments.length}
      />
      <CommentForm />
      <PostedComments postedComments={props.postedComments} />
    </div>
  );
}

export default VideoInfo;
