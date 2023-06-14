import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Open_Sans, Alegreya } from 'next/font/google';

import { Layout } from '@/layout';
import '@/styles/globals.css';

const open_sans = Open_Sans({
  subsets: ['cyrillic'],
  display: 'swap',
  weight: ['300', '400', '600', '700'],
  variable: '--font-open-sans',
});

const alegreya = Alegreya({
  subsets: ['cyrillic'],
  display: 'swap',
  weight: ['500'],
  variable: '--font-alegreya',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-open-sans: ${open_sans.style.fontFamily};
            --font-alegreya: ${alegreya.style.fontFamily};
          }
        `}
      </style>
      {router.pathname === '/404' && <Component {...pageProps} />}
      {router.pathname !== '/404' && (
        <Layout data={pageProps} className={classNames('layout')}>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
