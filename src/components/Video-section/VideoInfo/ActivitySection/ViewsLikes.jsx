import "./_ViewsLikes.scss";
import viewsIcon from "../../../../Assets/Images/Icons/views.svg";
import likesIcon from "../../../../Assets/Images/Icons/likes.svg";
// import titleVideo from "../../../../Data/video-details.json";
// import videoInfo from "../../../../Data/videos.json";

const ViewsLikes = (props) => {
  return (
    <div className='views-likes'>
      <div className='views'>
        <img src={viewsIcon} alt='Bmx-img' />
        <p className='views__amount'></p>
      </div>
      <div className='likes'>
        <img src={likesIcon} alt='' />
        <p className='likes__amount'></p>
      </div>
    </div>
  );
};

export default ViewsLikes;
