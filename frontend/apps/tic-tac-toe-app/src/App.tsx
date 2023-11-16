function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <li>
                        <span className="player-name">Player 1</span>
                        <span className="player-symbol">X</span>
                    </li>
                    <li>
                        <span className="player-name">Player 2</span>
                        <span className="player-symbol">O</span>
                    </li>
                </ol>

                <div id="board">
                    <div className="row">
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                    </div>
                    <div className="row">
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                    </div>
                    <div className="row">
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                    </div>
                </div>
            </div>
            LOG
        </main>
    );
}

export default App;
