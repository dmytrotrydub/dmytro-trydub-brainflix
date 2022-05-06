import "./_ViewsLikes.scss";
import viewsIcon from "../../../../Assets/Images/Icons/views.svg";
import likesIcon from "../../../../Assets/Images/Icons/likes.svg";

const ViewsLikes = (props) => {
  return (
    <div className='views-likes'>
      <div className='views'>
        <img src={viewsIcon} alt={props.viewsImgAlt} />
        <p className='views__amount'>{props.viewsAmount}</p>
      </div>
      <div className='likes'>
        <img src={likesIcon} alt={props.likesImgAlt} />
        <p className='likes__amount'>{props.likesAmount}</p>
      </div>
    </div>
  );
};

export default ViewsLikes;
