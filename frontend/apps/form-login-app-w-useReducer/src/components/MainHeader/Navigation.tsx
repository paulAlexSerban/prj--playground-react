import { type FC } from 'react';

import classes from './Navigation.module.scss';

type NavigationProps = {
    isLoggedIn: boolean;
    onLogout: () => void;
};

const Navigation: FC<NavigationProps> = (props) => {
    return (
        <nav className={classes.nav}>
            <ul>
                {props.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {props.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {props.isLoggedIn && (
                    <li>
                        <button onClick={props.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
