import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import styles from './Root.module.scss';

const RootLayout: FC = () => {
    return (
        <>
            <MainNavigation />
            <main className={styles.content}>
                {/* Outlet marks the place where the child component should be rendered to */}
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;
