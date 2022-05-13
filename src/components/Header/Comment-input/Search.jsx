import "./_Search.scss";
import "../../UI/InputText/_InputText.scss";
import avatar from "../../../Assets/Images/Mohan-muruge.jpg";
import InputText from "../../UI/InputText/InputText";
import Button from "../../UI/Button/Button";

function Search(props) {
  return (
    <div className='comment-holder'>
      <InputText
        placeholder={props.placeholder}
        className={props.className}
        id={props.id}
      />
      <div className='avatar'>
        <img className='avatar-picture' src={avatar} alt='commenter-avatar' />
      </div>
      <Button className='button'>UPLOAD</Button>
    </div>
  );
}

export default Search;
