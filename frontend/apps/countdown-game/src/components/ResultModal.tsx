import { type FC, forwardRef, type Ref, useImperativeHandle, useRef } from 'react';

type ResultModalProps = {
    result: string;
    targetTime: number;
    ref: Ref<HTMLDialogElement>;
};

export type ResultModalHandle = {
    open: () => void;
};

const ResultModal = forwardRef<ResultModalHandle, ResultModalProps>(({ result, targetTime }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    useImperativeHandle(ref, () => {
        return {
            open() {
                if (dialogRef.current) {
                    dialogRef.current.showModal();
                }
            },
        };
    });

    return (
        <dialog className="result-modal" ref={dialogRef}>
            <h2>You {result}!</h2>
            <p>
                The target time with <strong>{targetTime} seconds</strong>
            </p>
            <p>
                You stopped the timer with <strong>{targetTime} second left.</strong>
            </p>
            <form method="dialog">
                <button className="button">Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;
