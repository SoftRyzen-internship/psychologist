import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        {/* title, description, main keywords, goal, googlebots */}

        <meta
          name="description"
          content="Психолог, психотерапевт, тренер Юлія Сулаєва. Індивідуальні психологічні консультації, курси, майстер-класи та навчання для психологів"
        />

        <meta name="googlebot" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        <meta
          name="keywords"
          content="майстер-класи та навчання для психологів, Психолог, психотерапевт, курси, ПСИХОЛОГ, ПСИХОТЕРАПЕВТ, КУРСИ, Лікування ментальних проблем, Реабілітація після ментальних травм, Профілактика сімейної гармонії, Індивідуальні консультації із психологом, Групові консультації, Навчання методам роботи з травмами, Навчання методу SEE-FAR-CBT для психологів, Психологія лідерства, Тайм менеджмент, Курси стресостійкості, Курси ораторського мистецтва, Курси психолога Тренінг для батьків, Курси з Конфліктології, Тренінги, Тренінги для психологів, Тренер–психолог"
        />
        <meta name="author" content="SoftRyzen intership team" />

        {/* og image */}

        <meta property="og:image" content={'/images/main_hero.png'} />

        <meta property="og:image:width" content="458" />

        <meta property="og:image:height" content="734" />

        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="Юлія Сулаєва | Психолог - психотерапевт"
        />

        <meta property="og:title" content="Психолог Юлія" />

        {/* links for searchers */}

        <link rel="canonical" href="https://e-volunteer.vercel.app/" />

        {/* <link rel="alternate" href="https://e-volunteer.vercel.app/" /> */}

        {/* favicon */}

        {/* <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
