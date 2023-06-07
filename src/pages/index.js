import Head from 'next/head';
import { FirstView } from '@/views';
import { ActionButton } from '@/components/ActionButton/ActionButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Головна</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main">
        <FirstView />
        <ActionButton/>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      // Will be passed to the page component as props
    },
  };
}
