const logo =
    'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/paint-chevalet-original.webp';
import classes from './header.module.scss';

export default function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} alt="A canvas" />
            <h1>ReactArt</h1>
            <p>A community of artists and art-lovers.</p>
        </header>
    );
}
