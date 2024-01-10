import { type FC } from 'react';

type RegistrationProps = {
    layout: 'centered' | 'horizontal';
};

const Registration: FC<RegistrationProps> = ({ layout = 'centered' }) => {
    const cssClasses = layout;

    return (
        <div className={cssClasses}>
            <h1>Registration Open!</h1>
            <p>2018 - 2019</p>
            <p>
                Register and upload your design todat to know how good your design is: get a complementary preeliminary
                score.
            </p>
            <button>Submit now</button>
        </div>
    );
};

export default Registration;
