import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 10,
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#2b7fff',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#7f22fe',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
});

interface AppThemeProps {
  children: React.ReactNode;
}

export type RuiTheme = typeof theme;

export default function AppTheme({ children }: AppThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
