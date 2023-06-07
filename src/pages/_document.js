import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <meta
          name="description"
          content="Психолог, психотерапевт, тренер Юлія Сулаєва. Індивідуальні психологічні консультації, курси, майстер-класи та навчання для психологів"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@500;800&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
