import React from 'react';
import Text from './Text';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

test('renders all options passed to it', () => {
    const { getByTestId } = render(<Text size="xl">Custom text content</Text>);
    expect(getByTestId('Text')).toHaveClass('text-xl');
    expect(getByTestId('Text')).toHaveTextContent('Custom text content');
});
