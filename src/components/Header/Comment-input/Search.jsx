import "./Search.scss";
import "../../UI/InputText/inputText.scss";
import avatar from "../../../assets/images/Mohan-muruge.jpg";
import InputText from "../../UI/InputText/InputText";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const Search = (props) => {
  const linkStyle = {
    display: "flex",
    flexWrap: "wrap",
    // width: "150px",
    textDecoration: "none",
  };
  return (
    <div className='comment-holder'>
      <InputText placeholder={props.placeholder} className={props.className} id={props.id} />
      <div className='avatar'>
        <img className='avatar-picture' src={avatar} alt='commenter-avatar' />
      </div>
      <Link to='/videoupload' style={linkStyle}>
        <Button className='button'>UPLOAD</Button>
      </Link>
    </div>
  );
};

export default Search;
