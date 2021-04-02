import type { AppProps /*, AppContext */ } from 'next/app';
import 'tailwindcss/tailwind.css';
import { Provider } from 'next-auth/client';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
