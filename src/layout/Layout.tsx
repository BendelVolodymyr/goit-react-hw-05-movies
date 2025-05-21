import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
