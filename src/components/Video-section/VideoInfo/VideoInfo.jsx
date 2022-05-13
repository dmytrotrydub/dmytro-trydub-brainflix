import "./_Video-info.scss";
import ActivitySection from "./ActivitySection/ActivitySection";
import VideoDescription from "./ActivitySection/VideoDescription/VideoDesctiption";
import CommentForm from "./ActivitySection/CommentForm/CommentForm";
import PostedComments from "./ActivitySection/PostedComments/PostedComments";

function VideoInfo(props) {
  console.log(props);
  return (
    <div className='video-info'>
      <h2 className='video-info__title'>{props.titleName}</h2>
      <ActivitySection
        channel={props.channel}
        likes={props.likes}
        views={props.views}
        date={props.date}
      />
      <VideoDescription
        comments={props.comments}
        videoDescription={props.videoDescription}
      />
      <CommentForm />
      <PostedComments postedComments={props.postedComments} />
    </div>
  );
}

export default VideoInfo;
