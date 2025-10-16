import { NavLink, Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";

const RootLayout = () => {
    return(
        <div className={styles.container}>
            <div className={styles.head}>
                Header
            </div>

            <div className={styles.nav}>
                <NavLink to="/" className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Home</NavLink>
                <NavLink to="/page1" className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Page 1</NavLink>
                <NavLink to="/page2" className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Page 2</NavLink>
                <NavLink to="/pokemon" className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Pokemon</NavLink>
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