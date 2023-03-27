'use client';
import createTheme from '@mui/material/styles/createTheme';
import '@app/styles/normalize.scss';
import { CssBaseline, ThemeProvider } from '@mui/material';

export const theme = createTheme();

export default function RootLayout(p) {
  return (
    <html lang="en">
      <head>
        <title>Chris Lemus Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline>{p.children}</CssBaseline>
        </ThemeProvider>
      </body>
    </html>
  );
}
