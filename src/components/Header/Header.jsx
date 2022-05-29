import "./Header.scss";
import logoImg from "../../assets/images/logo/BrainFlixLogo.svg";
import Search from "./Comment-input/Search";

function Header() {
  return (
    <>
      <div className='site-header'>
        <div className='site-logo'>
          <img id='logo-image' src={logoImg} alt='Site logo' />
        </div>
        <Search placeholder='Search' className='search' id='form-input' />
      </div>
    </>
  );
}

export default Header;
