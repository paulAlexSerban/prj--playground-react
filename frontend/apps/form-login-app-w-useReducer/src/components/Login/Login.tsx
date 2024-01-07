import { type FC, useState, type ChangeEvent, useEffect, useReducer } from 'react';
import { emailReducer, passwordReducer } from './Login.reducers';
import Card from '../UI/Card/Card';
import classes from './Login.module.scss';
import Button from '../UI/Button/Button';
import { type LoginProps } from './Login.types';

const Login: FC<LoginProps> = (props) => {
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false, touched: false });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: false,
        touched: false,
    });

    // emailIsValid and passwordIsValid are aliases for emailState.isValid and passwordState.isValid
    // this is a destructuring assignment pattern with renaming
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        // debounce pattern to avoid checking form validity on every keystroke
        const timer = setTimeout(() => {
            console.log('checking form validity');
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log('CLEANUP');
            clearTimeout(timer);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        dispatchEmail({ type: 'USER_INPUT', val: value });
    };

    const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        dispatchPassword({ type: 'USER_INPUT', val: value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${emailState.touched && !emailState.isValid ? classes.invalid : ''}`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.touched && !passwordState.isValid ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
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
