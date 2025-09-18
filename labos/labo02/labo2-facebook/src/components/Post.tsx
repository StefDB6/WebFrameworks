import styles from "../App.module.css";
import Article from "./Article";
import Caption from "./Caption";
import Footer from "./Footer";
import Profile from "./Profile";
import type { PostType } from "./types";

interface PostProps {
    post: PostType
}

const Post = (props: PostProps) => {
    return (
      <div className={styles.f_card}>
        <Profile profile={props.post.profile}/>
        <Caption caption={props.post.caption}/>
        <Article article={props.post.article}/>
        <Footer footer={props.post.footer}/>
      </div>
    )
}

export default Post