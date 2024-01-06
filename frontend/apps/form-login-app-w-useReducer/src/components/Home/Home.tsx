import { type FC } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.scss';

type HomeProps = {
    onLogout?: () => void;
};

const Home: FC<HomeProps> = () => {
    return (
        <Card className={classes.home}>
            <h1>Welcome back!</h1>
        </Card>
    );
};

export default Home;
