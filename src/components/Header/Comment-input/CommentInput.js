import '../../../styles/partials/Header/Comment-input/_Comment-input.scss';
import avatar from "../../../Assets/Images/Mohan-muruge.jpg";




function Comment () {

    const textInputValue = 'JOIN THE CONVERSATION'
    return (
        <div className="comment-holder">
            <form className="search-form">
                <label htmlFor="comment-input"></label>
                <input type="text" id="comment-input" placeholder="Search"></input>
                <div className="avatar">
                    <img id="avatar-picture-mobile" src={avatar} alt="commenter-avatar"/>
                </div>
                <button id="upload-button">
                    UPLOAD
                </button>             
                <div className="avatar">
                    <img id="avatar-picture" src={avatar} alt="commenter-avatar"/>
                </div>
            </form>
        </div>
    )
}


export default Comment;