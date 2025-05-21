import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerBox}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navLink}>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li className={styles.navLink}>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
