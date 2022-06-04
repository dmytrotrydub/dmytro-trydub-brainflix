import "./home.scss";
import Main from '../../components/Main/Main';

const Home = (props) => {
    console.log("props inside home", props);
    return (
        <Main videoData={props}/>
    )
        
};

export default Home;