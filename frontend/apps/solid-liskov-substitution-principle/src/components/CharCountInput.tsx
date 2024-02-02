import { type FC, useState, type ChangeEvent, type InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
    return <input {...props} />;
};

type CharCountInputProps = InputProps & {
    onCharacterCountChange?: (count: number) => void; // Optional additional prop
};

const CharCountInput: FC<CharCountInputProps> = ({ onCharacterCountChange, ...rest }) => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        if (onCharacterCountChange) {
            onCharacterCountChange(e.target.value.length);
        }
    };

    return (
        <div>
            <Input value={input} onChange={handleInputChange} {...rest} />
            <span>Char count: {input.length}</span>
        </div>
    );
};

export { Input, CharCountInput };

/**
In the code above, we use a basic Input component to create an enhanced version of it that can also display the number of characters in the input. Although we add new logic to it, CharCountInput still retains the functionality of the original Input component. The interface of the component also remains unchanged (both inputs take the same props), so LSP is observed again.

Liskov substitution principle is particularly useful in the context of components sharing common traits, such as icons or inputs  - one icon component should be swappable for another icon, more specific DatePickerInput and AutocompleteInput components should be swappable for a more generic Input component, and so on. However, we should acknowledge that this principle cannot and should not always be observed. More often than not, we create sub-components with the goal of adding new functionality that their super-components don’t have, and that will often break the interface of the super-component. This is a completely valid use case, and we shouldn’t try to shoehorn LSP everywhere.

As for components where LSP does make sense, we need to make sure that we don’t break the principle unnecessarily.
 */
