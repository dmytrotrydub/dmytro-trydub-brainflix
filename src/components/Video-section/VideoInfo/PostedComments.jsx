import "./_PostedComment.scss";
import Comment from "../VideoInfo/ActivitySection/Comment";

const PostedComments = (props) => {
  return (
    // ! for each comments create a comment card with name date and title
    <div className='posted-comments'>
      {props.postedComments.map((comment, i) => {
        console.log(comment);
        const date = new Date(comment.timestamp);
        const day = String(date.getDate()).padStart(2, 0);
        const month = String(date.getMonth() + 1).padStart(2, 0);
        const year = date.getFullYear();
        const fullDate = `${month}/${day}/${year}`;

        return (
          <Comment
            key={i}
            name={comment.name}
            comment={comment.comment}
            date={fullDate}
          />
        );
      })}
    </div>
  );
};

export default PostedComments;
