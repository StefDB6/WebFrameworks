import styles from "../App.module.css";
import type { ArticleType } from "./types";

interface ArticleProps {
    article : ArticleType
}

const Article = (props: ArticleProps) => {
    return (
        <div className={styles.reference}>
          <img className={styles.reference_thumb} src={props.article.img} />
          <div className={styles.reference_content}>
            <div className={styles.reference_title}>
              {props.article.title}
            </div>
            <div className={styles.reference_subtitle}>
              {props.article.subtitle}
            </div>
            <div className={styles.reference_font}>{props.article.link}</div>
          </div>
        </div>
    )
}

export default Article