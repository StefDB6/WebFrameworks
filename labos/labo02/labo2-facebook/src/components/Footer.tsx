import styles from "../App.module.css";
import type { FooterType } from "./types";

interface FooterProps {
    footer: FooterType
}

const Footer = (props: FooterProps) => {
    return (
        <div className={styles.social}>
          <div className={styles.social_content}></div>
          <div className={styles.social_buttons}>
            <span>
              <i className="fa fa-thumbs-up"></i>{props.footer.like}
            </span>
            <span>
              <i className="fa fa-comment"></i>{props.footer.comment}
            </span>
            <span>
              <i className="fa fa-share"></i>{props.footer.share}
            </span>
          </div>
        </div>
    )
}

export default Footer