import React from 'react';
import ReactDOM from 'react-dom/client';

import { Select } from '@wbk--reactjs-playground--typescript/react-cmp-lib';

import '@wbk--reactjs-playground--typescript/lsg-styles-generic/lib/components/atoms/utilities.css';
import '@wbk--reactjs-playground--typescript/lsg-styles-generic/lib/components/atoms/paragraph.css';
import '@wbk--reactjs-playground--typescript/lsg-styles-generic/lib/components/atoms/margin.css';
import '@wbk--reactjs-playground--typescript/lsg-styles-generic/lib/components/molecules/select.css';

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

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div style={{ padding: '40px' }}>
            <Select options={options} />
        </div>
    </React.StrictMode>
);
