import { FC } from 'react';
import classes from './CartItem.module.scss';

export type CartItemProps = {
    item: { title: string; quantity: number; total: number; price: number };
};

const CartItem: FC<CartItemProps> = ({ item: { title, quantity, total, price } }) => {
    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
