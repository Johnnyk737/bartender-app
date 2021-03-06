import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../app/styles/theme';

addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));
