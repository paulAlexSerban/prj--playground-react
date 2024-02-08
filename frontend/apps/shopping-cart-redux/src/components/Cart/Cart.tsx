import { FC } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.scss';
import CartItem from './CartItem';

const Cart: FC = () => {
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                <CartItem item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }} />
            </ul>
        </Card>
    );
};

export default Cart;