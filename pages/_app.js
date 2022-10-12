import { AppContextProvider } from '../context/AppContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider value={pageProps.itemsArray}>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
