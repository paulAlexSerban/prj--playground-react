import Container from './UI/Container.tsx';
import { type Timer as TimerProps, useTimersContext } from '../store/timers-context.tsx';

const Timer = ({ name, duration }: TimerProps) => {
    return (
        <div className="timer">
            <h2>{name}</h2>
            <p>Duration: {duration}</p>
        </div>
    );
};

export default Timer;
