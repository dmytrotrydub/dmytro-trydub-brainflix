import "./_VideoDescription.scss";

const VideoDescription = (props) => {
  return (
    <div className='description-comments'>
      <p className='description-comments__text'>{props.videoDescription}</p>
      <p className='description-comments__comments-amount'>
        {props.commented} Comments
      </p>
    </div>
  );
};

export default VideoDescription;
