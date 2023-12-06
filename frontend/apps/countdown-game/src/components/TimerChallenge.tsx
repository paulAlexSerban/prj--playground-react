import { type FC, useRef, useState } from 'react';
import ResultModal from './ResultModal';

type TimerChallengeProps = {
    title: string;
    targetTime: number;
};

const TimerChallenge: FC<TimerChallengeProps> = ({ title, targetTime }) => {
    const [timerExpired, setTimerExpired] = useState<boolean>(false);
    const [timerStarted, setTimerStarted] = useState<boolean>(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    // timerRef is component instance specific
    const timerRef = useRef<NodeJS.Timeout>();
    const handleStart = () => {
        console.log('Timer started!');
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            console.log('Timer is done!');
            setTimerExpired(true);
            if (dialogRef.current) {
                dialogRef.current.showModal();
            }
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    const handleStop = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        setTimerStarted(false);
    };

    return (
        <>
            <ResultModal ref={dialogRef} result="lost" targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You Lost!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <div>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Timer started' : 'Start Timer'}
                    </button>
                </div>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Timer is active' : 'Timer is not active'}
                </p>
            </section>
        </>
    );
};

export default TimerChallenge;
