import "./_PostedComments.scss";
import Comment from "../Comment/Comment";
import { timeConverter } from "../../../../helper/Helper";

const PostedComments = (props) => {
  return (
    // ! for each comments create a comment card with name date and title
    <div className='posted-comments'>
      {props.postedComments.map((comment, i) => {
        const convertedTime = timeConverter(comment.timestamp);
        return (
          <Comment
            key={i}
            name={comment.name}
            comment={comment.comment}
            date={convertedTime}
          />
        );
      })}
    </div>
  );
};

export default PostedComments;
