import { type FC } from 'react';

type DisplayUserProps = {
    name: string;
};

const DisplayUser: FC<DisplayUserProps> = ({ name }) => {
    return (
        <div>
            <h3>Hello, {name}! </h3>
        </div>
    );
};

export default DisplayUser;
