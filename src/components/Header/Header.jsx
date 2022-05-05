import "../../styles/partials/Header/_Header.scss";
import logoImg from "../../Assets/Images/Logo/BrainFlixLogo.svg";
import CommentInput from "./Comment-input/CommentInput";

function Header() {
  return (
    <>
      <div className='site-header'>
        <div className='site-logo'>
          <img id='logo-image' src={logoImg} alt='Site logo' />
        </div>
        <CommentInput />
      </div>
    </>
  );
}

export default Header;
