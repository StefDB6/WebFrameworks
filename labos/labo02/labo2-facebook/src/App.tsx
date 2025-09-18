import type {PostType} from "./components/types";
import Post from "./components/Post";

const App = () => {

  const post : PostType = {
    profile: {
      pfp : "https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-cat.png",
      un : "Purrfectly Pawsome",
      bio : "Just 9 lives ago"
    },
    caption : {
      text : "Do you know why cats are excellent programmers? Because they always purr-fect their code! 😸"
    },
    article : {
      img: "https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-hammock.png",
      title: "The Ultimate Guide to Napping Like a Cat | CatNapTips",
      subtitle: "Learn the art of napping, feline style! Just follow these simple tips.",
      link: "catnaptips.com"
    },
    footer : {
      like: "Paws Up!",
      comment: "Meow-back",
      share: "Share the Cat-titude"
    }
  }

  return (
    <>
      <Post post={post}/>
    </>
  );
};

export default App;