import { type FC, forwardRef, type Ref } from 'react';
type ResultModalProps = {
    result: string;
    targetTime: number;
    ref: Ref<HTMLDialogElement>;
};

const ResultModal: FC<ResultModalProps> = forwardRef(({ result, targetTime }, ref) => {
    return (
        <dialog className="result-modal" ref={ref}>
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
