import "./_ViewsLikes.scss";
import viewsIcon from "../../../../Assets/Images/Icons/views.svg";
import likesIcon from "../../../../Assets/Images/Icons/likes.svg";

const ViewsLikes = (props) => {
  return (
    <div className='views-likes'>
      <div className='views'>
        <img src={viewsIcon} alt='likes-icon' />
        <p className='views__amount'>{props.views}</p>
      </div>
      <div className='likes'>
        <img src={likesIcon} alt='views-icon' />
        <p className='likes__amount'>{props.likes}</p>
      </div>
    </div>
  );
};

export default ViewsLikes;
