import "./_Main.scss";
import VideoInfo from "./VideoInfo/VideoInfo";
import VideoList from "./VideoList/VideoList";

const Main = (props) => {
  const timestamp = parseInt(props.date);
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const fullDate = `${month}/${day}/${year}`;

  return (
    <div className='main'>
      <VideoInfo
        // comments={props.comments}
        videoDescription={props.videoDescription}
        titleName={props.titleName}
        likes={props.likes}
        views={props.views}
        channel={props.channel}
        date={fullDate}
        postedComments={props.postedComments}
      />
      <VideoList videoList={props.videoList} />
    </div>
  );
};

export default Main;
