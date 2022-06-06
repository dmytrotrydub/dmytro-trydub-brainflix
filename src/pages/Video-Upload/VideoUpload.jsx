import "./videoUpload.scss";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/UI/Button/Button";
import InputText from "../../components/UI/InputText/InputText";
import { Link } from "react-router-dom";
import "../../styles/_variables.scss";

const VideoUpload = (props) => {
  // ! router link styles
  const linkStyle = {
    width: "100%",
    textDecoration: "none",
    fontSize: "0.87rem",
    color: "#0095FF",
    marginTop: "1.5rem",
    margin: "0 auto",
  };
  return (
    <div className='video-upload'>
      <h1>Upload Video</h1>
      <div className='video-upload__form'>
        <form className='video-form'>
          <div className='image-holder'>
            <label htmlFor='video-thumbnail'>VIDEO THUMBNAIL</label>
            <img src={videoThumbnail} alt='video-thumbnail' className='video-thumbnail' />
          </div>
          <div className='input-forms'>
            <div className='title-form'>
              <label htmlFor='video-title'>TITLE YOUR VIDEO</label>
              <InputText
                type='text'
                id='video-title'
                placeholder='Add title to your Video'
              ></InputText>
            </div>
            <div className='description-form'>
              <label htmlFor='video-description'>ADD A VIDEO DESCRIPTION</label>
              <textarea id='video-description' placeholder='Add a description to your video' />
            </div>
          </div>
          <div className="buttons-holder">
            <Button className='button' id='publish-button'>
              PUBLISH
            </Button>
            <div className='link-holder'>
              <Link style={linkStyle} className='cancel-upload' to='/home'>
                CANCEL
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VideoUpload;
