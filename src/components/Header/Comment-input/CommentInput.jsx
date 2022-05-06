import "./_CommentInput.scss";
import avatar from "../../../Assets/Images/Mohan-muruge.jpg";
import InputText from "../../UI/InputText";
import Button from "../../UI/Button";

function Comment() {
  return (
    <div className='comment-holder'>
      <InputText id='search-input' />
      <div className='avatar'>
        <img id='avatar-picture' src={avatar} alt='commenter-avatar' />
      </div>
      <Button id='button'>UPLOAD</Button>
    </div>
  );
}

export default Comment;
