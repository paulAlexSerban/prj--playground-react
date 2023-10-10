import React from 'react';
import ReactDOM from 'react-dom';

import { Text, Margin } from '@prj--playground-react/react';

import '@prj--playground-react/scss/lib/atoms/text.css';
import '@prj--playground-react/scss/lib/atoms/utilities.css';
import '@prj--playground-react/scss/lib/atoms/margin.css';
import '@prj--playground-react/scss/lib/global.css';

ReactDOM.render(
    <div>
        <Margin space="xxl" left>
            <Text size="xl">Hello, world!</Text>
        </Margin>
    </div>,
    document.getElementById('root')
);
