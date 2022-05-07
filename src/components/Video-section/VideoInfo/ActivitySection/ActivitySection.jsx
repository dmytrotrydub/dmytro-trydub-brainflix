import "./_ActivitySection.scss";
import ViewsLikes from "./ViewsLikes";
import AuthorDate from "./AuthorDate";

const ActivitySection = (props) => {
  return (
    <>
      <div className='activity-section'>
        <AuthorDate />
        <ViewsLikes />
      </div>
    </>
  );
};

export default ActivitySection;
