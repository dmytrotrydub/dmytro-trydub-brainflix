import "./_Thumbnail.scss";

const Thumbnail = (props) => {
  return (
    <div className='thumbnail'>
      <div className='thumbnail__poster-container'>
        <img src={props.video.image} alt={props.video.title} />
      </div>
      <div className='thumbnail__title-channel'>
        <p className='thumbnail__title'>{props.video.title}</p>
        <p className='thumbnail__channel'>{props.video.channel}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
