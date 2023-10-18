import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from '@prj--playground-react/react';

import '@prj--playground-react/scss/lib/atoms/utilities.css';
import '@prj--playground-react/scss/lib/atoms/text.css';
import '@prj--playground-react/scss/lib/atoms/margin.css';
import '@prj--playground-react/scss/lib/molecules/select.css';
import '@prj--playground-react/scss/lib/global.css';

const options = [
    {
        label: 'Strict Black',
        value: 'strict-black',
    },
    {
        label: 'Heavenly Green',
        value: 'heavenly-green',
    },
    {
        label: 'Sweet Pink',
        value: 'pink',
    },
];

ReactDOM.render(
    <div style={{ padding: '40px' }}>
        <Select options={options} />
    </div>,
    document.querySelector('#root')
);
