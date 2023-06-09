import { getNewsList } from '@/lib/request';
import Head from 'next/head';
import NewsView from '@/views/News/NewsView';

const NewsPage = ({ allNews }) => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Новини</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NewsView allNews={allNews} />
    </>
  );
};

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

export default NewsPage;
