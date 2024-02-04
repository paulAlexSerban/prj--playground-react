import InputBox from './InputBox';

const FancyInputBox = () => {
    return (
        <div>
            <InputBox stylesForH1={{ color: 'red' }} h1Message={'Fancy - Enter your name: '} />
        </div>
    );
};

export default FancyInputBox;
