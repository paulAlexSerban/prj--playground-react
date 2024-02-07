import { FC } from 'react';
import classes from './CartButton.module.scss';

type CartButtonProps = {
    onClick: () => void;
};

const CartButton: FC<CartButtonProps> = () => {
    return (
        <button className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
