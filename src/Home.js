import avatar1 from './avatar1.jpeg';


const Home = () => {
    return ( 
        <div className="homeContent">
            <h4>About me:</h4>
            <p>Web developer, new to the scene. After discovering the world of coding, I have become very curious about how websites and apps work. I'm excited to learn more and work on my next challenge!</p>
        <img src={avatar1} className="avatar1" alt="avatar1" />
        </div>
     );
}
 
export default Home;