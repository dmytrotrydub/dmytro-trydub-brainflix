import "./_CommentForm.scss";
import commentAvatar from "../../../../../Assets/Images/Mohan-muruge.jpg";
import Button from "../../../../UI/Button/Button";
import TextArea from "../../../../UI/TextArea/TextArea";

const CommentForm = (props) => {
  return (
    <div className='comment-form'>
      <div className='comment-form__avatar'>
        <img className='avatar-picture' src={commentAvatar} alt='Avatar' />
      </div>
      <div className='comment-form__comment-submit'>
        <TextArea
          placeholder='Add a new comment'
          className='comment'
          id='comment-form-textarea'
          title='JOIN THE CONVERSATION'
        ></TextArea>
        <div className='comment-form__button-container'>
          <Button className='button' id='add-comment'>
            COMMENT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
