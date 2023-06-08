import Head from 'next/head';
import { FirstView } from '@/views';
import { getNewsList } from '@/utils/request';

export default function Home() {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Головна</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main">
        <FirstView />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { allNews } = await getNewsList();
  if (!allNews) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      allNews,
    },
  };
}