import '../../styles/partials/Video-section/_Video.scss';
import playButton from '../../Assets/Images/Icons/play.svg';
import scrub from '../../Assets/Images/Icons/scrub.svg';
import screenScale from '../../Assets/Images/Icons/fullscreen.svg';
import closeScreenScale from '../../Assets/Images/Icons/close_fullscreen.svg';




function Video (){
    return (
        <section className="video-section">           
            <video class="video-frame" poster="https://i.imgur.com/l2Xfgpl.jpg" controls>
            </video>
        </section>

    )
}


export default Video;







