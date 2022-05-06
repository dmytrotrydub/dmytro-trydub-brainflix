import "./_ActivitySection.scss";
import ViewsLikes from "./ViewsLikes";
import AuthorDate from "./AuthorDate";

const ActivitySection = (props) => {
  const viewsLikes = {
    viewsAmount: "1,001,023",
    likesAmount: "110,985",
  };
  return (
    <>
      <div className='activity-section'>
        <AuthorDate author={props.author} date={props.date} />
        <ViewsLikes
          viewsAmount={viewsLikes.viewsAmount}
          likesAmount={viewsLikes.likesAmount}
        />
      </div>
    </>
  );
};

export default ActivitySection;
