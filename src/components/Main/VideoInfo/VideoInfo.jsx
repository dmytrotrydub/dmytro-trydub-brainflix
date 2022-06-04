import "./Video-info.scss";
import ActivitySection from "./ActivitySection/ActivitySection";
import VideoDescription from "./ActivitySection/VideoDescription/VideoDesctiption";
import CommentForm from "./ActivitySection/CommentForm/CommentForm";
import PostedComments from "./ActivitySection/PostedComments/PostedComments";

function VideoInfo(props) {
  console.log(props);
  return (
    <div className='video-info'>
      <h1 className='video-info__title'>{props.videoDetails.title}</h1>
      <ActivitySection
        channel={props.videoDetails.channel}
        likes={props.videoDetails.likes}
        views={props.videoDetails.views}
        date={props.videoDetails.date}
      />
      <VideoDescription
        videoDescription={props.videoDetails}
        commented={props.videoDetails.comments.length}
      />
      <CommentForm />
      <PostedComments postedComments={props.videoDetails.comments} />
    </div>
  );
}

export default VideoInfo;
