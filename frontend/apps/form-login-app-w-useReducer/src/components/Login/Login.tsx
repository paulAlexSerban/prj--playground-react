import { type FC, useState, type ChangeEvent, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.scss';
import Button from '../UI/Button/Button';

type LoginProps = {
    onLogin: (email: string, password: string) => void;
};

const Login: FC<LoginProps> = (props) => {
    const [enteredEmail, setEnteredEmail] = useState<string>('');
    const [emailIsValid, setEmailIsValid] = useState<boolean>();
    const [enteredPassword, setEnteredPassword] = useState<string>('');
    const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    useEffect(() => {
        // debounce pattern to avoid checking form validity on every keystroke
        const timer = setTimeout(() => {
            console.log('checking form validity');
            setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
        }, 500);

        return () => {
            console.log('CLEANUP');
            clearTimeout(timer);
        };
    }, [enteredEmail, enteredPassword]);

    const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEnteredEmail(value);
    };

    const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEnteredPassword(value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
