import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Open_Sans, Alegreya } from 'next/font/google';
import classNames from 'classnames';

import { Layout } from '@/layout';
import { Spinner } from '@/components';

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

      {router.pathname === '/404' && (
        <Hydrated>
          <Component {...pageProps} />
        </Hydrated>
      )}

      {router.pathname !== '/404' && (
        <Hydrated>
          <Layout data={pageProps} className={classNames('layout')}>
            <Script
              id="fb-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID});
            fbq('track', 'PageView');
          `,
              }}
            />
            <Component {...pageProps} />
          </Layout>
        </Hydrated>
      )}
    </>
  );
}

const Hydrated = ({ children }) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);

  return hydration ? children : <Spinner />;
};
