import styles from "../App.module.css";
import type { ProfileType} from "./types";
interface ProfileProps {
    profile: ProfileType
}

const Profile = (props: ProfileProps) => {
    return (
        <div className={styles.header}>
          <div className={styles.options}>
            <i className="fa fa-chevron-down"></i>
          </div>
          <img
            className={styles.co_logo}
            src={props.profile.pfp}
          />
          <div className={styles.co_name}>
            <a href="#">{props.profile.un}</a>
          </div>
          <div className={styles.time}>
            <a href="#">{props.profile.bio}</a> · <i className="fa fa-globe"></i>
          </div>
        </div>
    )
}

export default Profile