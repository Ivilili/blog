import HomeIntro from '../../components/HomeIntro/HomeIntro';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <HomeIntro 
         title="Welcome World"
         text="This is a community blog, where we write about interesting topics. If you like reading about interesting topics check out our posts." 
         linkName="All posts"
         linkTo="posts"
         propsmessage="Hello from"
       />
    </div>
  );
}

export default Home;