import './App.css';
import TodosPage from './components/TodosPage';
import ConnectedLoginForm from './components/ConnectedLoginForm';
function App() {
    return (
        <>
            <div>
                <h2>login Form</h2>
                <ConnectedLoginForm />
            </div>  
            <div>
                <h2>ToDo Page</h2>
                <TodosPage />
            </div>
        </>
    );
}

export default App;
