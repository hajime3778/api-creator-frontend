import 'ress';
import 'antd/dist/antd.css';
import 'src/styles/global.scss';

import type { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
