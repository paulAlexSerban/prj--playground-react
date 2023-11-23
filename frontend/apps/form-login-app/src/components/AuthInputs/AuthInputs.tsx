import { useState } from 'react';
import classes from './authInputs.module.scss';

type AuthInputsProps = {
    email: string;
    password: string;
};

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier: keyof AuthInputsProps, value: string) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <div id="auth-inputs" className={classes['auth-inputs']}>
            <div className={classes.controls}>
                <p>
                    <label>Email</label>
                    <input
                        type="email"
                        className={emailNotValid ? classes.invalid : undefined}
                        onChange={(event) => handleInputChange('email', event.target.value)}
                    />
                </p>
                <p>
                    <label>Password</label>
                    <input
                        type="password"
                        className={passwordNotValid ? classes.invalid : undefined}
                        onChange={(event) => handleInputChange('password', event.target.value)}
                    />
                </p>
            </div>
            <div className={classes.actions}>
                <button type="button" className={classes['text-button']}>
                    Create a new account
                </button>
                <button className={classes.button} onClick={handleLogin}>
                    Sign In
                </button>
            </div>
        </div>
    );
}
