import './App.css';
import FancyInputBox from './components/FancyInputBox';
import InputBox from './components/InputBox';

function App() {
    return (
        <>
            <div>
                <h2>Input & FancyInput</h2>
                <InputBox stylesForH1={{ color: 'gray' }} h1Message={'Base - Enter your name: '} />
                <FancyInputBox />
            </div>
        </>
    );
}

export default App;
