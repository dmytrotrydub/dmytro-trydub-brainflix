import "./_PostedComment.scss";
import Comment from "../VideoInfo/ActivitySection/Comment";
import { render } from "@testing-library/react";

const PostedComments = (props) => {
  return (
    // ! for each comments create a comment card with name date and title
    <div className='posted-comments'>
      {props.postedComments.forEach((comment, i) => {
        <Comment
          key={i}
          name={comment.name}
          comment={comment.comment}
          date={comment.timestamp}
        />;
        // console.log(comment.name);
      })}
    </div>
  );
};

export default PostedComments;
