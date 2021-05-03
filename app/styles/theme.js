import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Muli',
      "Roboto", 
      "Helvetica", 
      "sans-serif"
    ].join(','),
  },
});

export default theme;
