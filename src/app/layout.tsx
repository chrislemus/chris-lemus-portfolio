'use client';
import '@app/styles/styles.css';

// import { theme } from '@app/styles/theme';
// import '@app/styles/normalize.scss';
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function RootLayout(p) {
  return (
    <html lang="en" data-theme="emerald">
      <head>
        <title>Chris Lemus Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        {/* <ThemeProvider theme={theme}>
          <CssBaseline></CssBaseline>
        </ThemeProvider> */}
        {p.children}
      </body>
    </html>
  );
}
