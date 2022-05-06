import "./_Video.scss";

function Video(props) {
  return (
    <>
      <section className='video-section'>
        <video
          className='video-frame'
          poster={props.imageSource}
          controls
        ></video>
      </section>
    </>
  );
}

export default Video;
