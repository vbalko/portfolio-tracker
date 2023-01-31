import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#e63946',
    },
    background: {
      default: '#fafafa',
    },
  },
});

export default theme;
