import { type FC } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
const Header: FC = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant logo." />
                <h1>Food ordering App</h1>
            </div>
            <nav>
                <Button textOnly>Cart (0)</Button>
            </nav>
        </header>
    );
};

export default Header;
