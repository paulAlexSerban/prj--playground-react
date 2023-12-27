import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

type CartModalProps = {
    cartItems: any;
    onUpdateCartItemQuantity: any;
    title: string;
    actions: any;
};

export type CartModalRef = {
    open: () => void;
};

const CartModal = forwardRef<CartModalRef, CartModalProps>(function Modal(
    { cartItems, onUpdateCartItemQuantity, title, actions }: CartModalProps,
    ref
) {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                if (dialog.current) {
                    dialog.current.showModal();
                }
            },
        };
    });

    return createPortal(
        <dialog id="modal" ref={dialog}>
            <h2>{title}</h2>
            <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
            <form method="dialog" id="modal-actions">
                {actions}
            </form>
        </dialog>,
        document.getElementById('modal') as HTMLElement
    );
});

export default CartModal;
