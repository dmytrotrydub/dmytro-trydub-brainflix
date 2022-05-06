import "./_ActivitySection.scss";

const ActivitySection = (props) => {
  return (
    <>
      <div className='activity-section'>
        <h3 className='Activity-section__author'>{props.author}</h3>
        <p className='Activity-section__date'>{props.date}</p>
        <div className='views'>
          <img src={props.viewsImgSource} alt={props.viewsImgAlt} />
          <p className='views__amount'>{props.children}</p>
        </div>
        <div className='likes'>
          <img src={props.likesImgSource} alt={props.likesImgAlt} />
          <p className='likes__amount'>{props.children}</p>
        </div>
      </div>
    </>
  );
};

export default ActivitySection;
