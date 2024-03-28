import { FC } from 'react';
import { Link } from 'react-router-dom';

const HomePage: FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>
                Go to <Link to="/products">the list of products</Link>
            </p>
        </div>
    );
};

export default HomePage;
