import { type FC } from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.scss';

type MainHeaderProps = {
    isAuthenticated: boolean;
    onLogout: () => void;
};

const MainHeader: FC<MainHeaderProps> = (props) => {
    return (
        <header className={classes['main-header']}>
            <h1>A Typical Page</h1>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
        </header>
    );
};

export default MainHeader;
