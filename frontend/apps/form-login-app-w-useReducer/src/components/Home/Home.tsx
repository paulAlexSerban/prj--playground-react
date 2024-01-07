import { type FC } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Home.module.scss';

type HomeProps = {
    onLogout?: () => void;
};

const Home: FC<HomeProps> = ({ onLogout }) => {
    return (
        <Card className={classes.home}>
            <h1>Welcome back!</h1>
            <Button onClick={onLogout}>Logout</Button>
        </Card>
    );
};

export default Home;
