import Input from './components/Input.tsx';

function App() {
    return (
        <main>
            <form action="">
                <Input id="name" label="Name" type="text" placeholder="Enter your name" />
                <Input id="age" label="Age" type="number" placeholder="Enter your age" />
            </form>
        </main>
    );
}

export default App;
