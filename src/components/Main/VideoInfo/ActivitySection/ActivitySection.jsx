import "./ActivitySection.scss";
import ViewsLikes from "./ViewsLikes/ViewsLikes";
import AuthorDate from "./AuthorDate/AuthorDate";

const ActivitySection = (props) => {
  return (
    <>
      <div className='activity-section'>
        <AuthorDate channel={props.channel} date={props.date} />
        <ViewsLikes likes={props.likes} views={props.views} />
      </div>
    </>
  );
};

export default ActivitySection;
