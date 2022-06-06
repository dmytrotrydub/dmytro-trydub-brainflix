import "./header.scss";
import logoImg from "../../assets/images/logo/BrainFlixLogo.svg";
import Search from "./Comment-input/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='site-header'>
      <div className='site-logo'>
        <Link to='/home'>
          <img id='logo-image' src={logoImg} alt='Site logo' />
        </Link>
      </div>
      <Search placeholder='Search' className='search' id='form-input' />
    </div>
  );
};

export default Header;
