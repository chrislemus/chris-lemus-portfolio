'use client';
import '@app/styles/styles.css';

export default function RootLayout(p) {
  return (
    <html lang="en" data-theme="emerald">
      <head>
        <title>Chris Lemus Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>{p.children}</body>
    </html>
  );
}
