import './App.css';
import DangerButton from './components/DangerButton';
import { Input, CharCountInput } from './components/CharCountInput';
function App() {
    return (
        <>
            <div>
                <h2>Danger Button</h2>
                <DangerButton>Danger Button</DangerButton>
            </div>
            <div>
                <h2>Input & Char Count Input</h2>
                <Input />
                <CharCountInput />
            </div>
        </>
    );
}

export default App;
