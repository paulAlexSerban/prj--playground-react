import { useState } from 'react';

import Counter from './components/Counter/Counter';
import ConfigureCounter from './components/Counter/ConfigureCounter.tsx';
import Header from './components/Header';
import { log } from './log.js';

function App() {
    log('<App /> rendered');
    const [chosenCount, setChosenCount] = useState(0);

    const handleSetCount = (newCount: number) => {
        setChosenCount(newCount);
    };

    return (
        <>
            <Header />
            <main>
                <ConfigureCounter onSet={handleSetCount} />
                <Counter initialCount={chosenCount} />
            </main>
        </>
    );
}

export default App;
