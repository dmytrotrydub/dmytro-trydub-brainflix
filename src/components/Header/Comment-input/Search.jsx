import "./search.scss";
import "../../UI/InputText/_InputText.scss";
import avatar from "../../../assets/images/Mohan-muruge.jpg";
import InputText from "../../UI/InputText/InputText";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const Search = (props) => {
  return (
    <div className='comment-holder'>
      <InputText placeholder={props.placeholder} className={props.className} id={props.id} />
      <div className='avatar'>
        <img className='avatar-picture' src={avatar} alt='commenter-avatar' />
      </div>
      <Link to='/videoupload'>
        <Button className='button'>UPLOAD</Button>
      </Link>
    </div>
  );
};

export default Search;
