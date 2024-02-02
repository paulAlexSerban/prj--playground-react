import { useState, type FC, type CSSProperties, type ChangeEvent } from 'react';

type InputBoxProps = {
    stylesForH1: CSSProperties;
    h1Message: string;
};

const InputBox: FC<InputBoxProps> = ({ stylesForH1, h1Message }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <>
            <h1 style={stylesForH1}>{h1Message}</h1>
            <input value={input} onChange={handleInputChange} />
        </>
    );
};

export default InputBox;
