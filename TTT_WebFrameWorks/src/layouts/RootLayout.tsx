import { NavLink, Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";

const RootLayout = () => {
    return(
        <div className={styles.container}>
            <div className={styles.head}>
                Header
            </div>

            <div className={styles.nav}>
                <NavLink to="/oefening1" className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Oefening 1</NavLink>
                <NavLink to="/oefening2" className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Oefening 2</NavLink>
                <NavLink to="/oefening3" className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Oefening 3</NavLink>
            </div>

            <div className={styles.content}>
                <Outlet/>
            </div>

            <div className={styles.footer}>
                Footer
            </div>
        </div>
    );
}

export default RootLayout;