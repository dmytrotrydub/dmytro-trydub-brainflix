import "./comment.scss";

const Comment = (props) => {
  return (
    <div className='comment-card'>
      <div className='comment-card__avatar-holder'></div>
      <div className='comment-card__comment-container'>
        <div className='name-date'>
          <p className='name-date__name'>{props.name}</p>
          <p className='name-date__date'>{props.date}</p>
        </div>
        <p className='comment-card__text'>{props.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
