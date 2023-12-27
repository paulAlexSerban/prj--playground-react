import { useRef, type FC } from 'react';

import CartModal, { CartModalRef } from './CartModal.tsx';
import { CartItem } from './Cart.tsx';

type HeaderProps = {
    cart: {
        items: CartItem[];
    };
    onUpdateCartItemQuantity: (id: string, amount: number) => void;
};

const Header: FC<HeaderProps> = ({ cart, onUpdateCartItemQuantity }: HeaderProps) => {
    const modal = useRef<CartModalRef>(null);

    const cartQuantity = cart.items.length;

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
            <CartModal
                ref={modal}
                cartItems={cart.items}
                onUpdateCartItemQuantity={onUpdateCartItemQuantity}
                title="Your Cart"
                actions={modalActions}
            />
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
