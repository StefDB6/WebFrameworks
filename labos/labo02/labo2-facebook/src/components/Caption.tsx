import styles from "../App.module.css";
import type { CaptionType } from "./types";

interface CaptionProps {
    caption : CaptionType
}

const Caption = (props: CaptionProps) => {
    return (
        <div className={styles.content}>
          <p>
            {props.caption.text}
          </p>
        </div>
    )
}

export default Caption