import { Open_Sans, Alegreya } from 'next/font/google';
import classNames from 'classnames';
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
      <Layout data={pageProps} className={classNames('layout')}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
