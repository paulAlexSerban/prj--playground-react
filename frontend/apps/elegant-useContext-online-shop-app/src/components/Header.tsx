import { useRef, type FC, useContext } from 'react';

import CartModal, { CartModalRef } from './CartModal.tsx';
import { CartContext } from '../store/shopping-cart-context.tsx';

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
    const modal = useRef<CartModalRef>(null);
    const cartContext = useContext(CartContext);
    const { items } = cartContext;
    const cartQuantity = items.length;

    const handleOpenCartClick = () => {
        if (modal.current) {
            modal.current.open();
        }
    };

    let modalActions = <button>Close</button>;

    if (cartQuantity > 0) {
        modalActions = (
            <>
                <button>Close</button>
                <button>Checkout</button>
            </>
        );
    }

    return (
        <>
            <CartModal ref={modal} title="Your Cart" actions={modalActions} />
            <header id="main-header">
                <div id="main-title">
                    <img src="logo.png" alt="Elegant model" />
                    <h1>Elegant Context</h1>
                </div>
                <p>
                    <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
                </p>
            </header>
        </>
    );
};

export default Header;
