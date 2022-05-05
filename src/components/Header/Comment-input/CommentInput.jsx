import "../../../styles/partials/Header/Comment-input/_Comment-input.scss";
import avatar from "../../../Assets/Images/Mohan-muruge.jpg";
import InputText from "../../UI/InputText";
import Button from "../../UI/Button";

function Comment() {
  const textInputValue = "JOIN THE CONVERSATION";
  return (
    <div className='comment-holder'>
      <InputText id='comment-input' />
      <div className='avatar'>
        <img id='avatar-picture-mobile' src={avatar} alt='commenter-avatar' />
      </div>
      <Button id='button'>UPLOAD</Button>
      <div className='avatar'>
        <img id='avatar-picture' src={avatar} alt='commenter-avatar' />
      </div>
      git
    </div>
  );
}

export default Comment;
