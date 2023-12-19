import LoginForm from './LoginForm';

const api = {
    login: async (email: string, password: string) => {
        console.log('login', email, password);
    },
};

const ConnectedLoginForm = () => {
    const handleSubmit = async (email: string, password: string) => {
        await api.login(email, password);
    };
    return <LoginForm onSubmit={handleSubmit} />;
};

export default ConnectedLoginForm;
