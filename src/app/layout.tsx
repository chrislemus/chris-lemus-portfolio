'use client';
import createTheme from '@mui/material/styles/createTheme';
import '@app/styles/normalize.scss';
import { CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme();

export default function RootLayout(p) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{p.children}</CssBaseline>
    </ThemeProvider>
  );
}
