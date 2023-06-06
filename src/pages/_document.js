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
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
