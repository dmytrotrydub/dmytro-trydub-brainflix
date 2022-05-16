import "./_Video-info.scss";
import ActivitySection from "./ActivitySection/ActivitySection";
import VideoDescription from "./ActivitySection/VideoDescription/VideoDesctiption";
import CommentForm from "./ActivitySection/CommentForm/CommentForm";
import PostedComments from "./ActivitySection/PostedComments/PostedComments";

function VideoInfo(props) {
  return (
    <div className='video-info'>
      <h1 className='video-info__title'>{props.titleName}</h1>
      <ActivitySection
        channel={props.channel}
        likes={props.likes}
        views={props.views}
        date={props.date}
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
