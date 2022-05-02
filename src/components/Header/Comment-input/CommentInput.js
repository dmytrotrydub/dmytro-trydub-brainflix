import '../../../styles/partials/Header/Comment-input/_Comment-input.scss';
import avatar from "../../../Assets/Images/Mohan-muruge.jpg";
import searchIcon from '../../../Assets/Images/Icons/upload.svg';



function Comment () {
    return (
        <div className="comment-holder">
            <form >
                <i className="search-icon"></i>
                <input type="text" id = "comment-input" placeholder="Search"></input>
            </form>
            <div className="avatar">
                <img src={avatar} alt="commenter-avatar"/>
            </div>
            <button id="search-button">Upload</button>
        </div>
    )
}


export default Comment;