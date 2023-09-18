import { createTheme } from '@mui/material';

// TODO: change to enum / get from variables.scss
const palette = {
  primary: '#38a3a5',
  secondary: '#f1ffc4',
  error: '#c3423f',
  warning: '#d8a828',
  info: '#b1f8f2',
  success: '#60992d',
  dark: '#131112',
  white: '#f7f7ff',
};

const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
      contrastText: palette.white,
    },
    secondary: {
      main: palette.secondary,
      contrastText: palette.dark,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
        disableRipple: true,
        disableFocusRipple: true,
      },
    },
  },
});

export default theme;