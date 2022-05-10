import "./_CommentForm.scss";
import commentAvatar from "../../../../Assets/Images/Mohan-muruge.jpg";
import Button from "../../../UI/Button";
import InputText from "../../../UI/InputText";

const CommentForm = (props) => {
  return (
    <div className='comment-form'>
      <div className='comment-form__avatar'>
        <img className='avatar-picture' src={commentAvatar} alt='Avatar' />
      </div>
      <div className='comment-form__comment-submit'>
        <InputText
          placeholder='Add a new comment'
          className='comment'
          id='comment-form-input'
          title='JOIN THE CONVERSATION'
        ></InputText>
        <Button className='button' id='add-comment'>
          COMMENT
        </Button>
      </div>
    </div>
  );
};

export default CommentForm;
