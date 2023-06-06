import { Inter } from 'next/font/google';
import classNames from 'classnames';
import { Layout } from '@/layout';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <Layout data={pageProps} className={classNames(inter.className, 'layout')}>
      <Component {...pageProps} />
    </Layout>
  );
}
