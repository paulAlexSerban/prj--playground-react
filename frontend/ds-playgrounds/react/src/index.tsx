import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from '@prj--react-playground-typescript/react-cmp-lib';

import '@prj--react-playground-typescript/lsg-styles-generic/lib/components/atoms/utilities.css';
import '@prj--react-playground-typescript/lsg-styles-generic/lib/components/atoms/text.css';
import '@prj--react-playground-typescript/lsg-styles-generic/lib/components/atoms/margin.css';
import '@prj--react-playground-typescript/lsg-styles-generic/lib/components/molecules/select.css';

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
