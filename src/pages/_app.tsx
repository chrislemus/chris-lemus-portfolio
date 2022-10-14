import '@app/styles/normalize.css';
import '@app/styles/index.scss';
import { theme } from '@app/styles/theme';
import { ThemeProvider } from '@material-ui/styles';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
