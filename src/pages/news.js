import Head from 'next/head';
import PropTypes from 'prop-types';
import { getNewsList } from '@/lib/request';
import { NewsView } from '@/views';

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
  const { news } = await getNewsList();

  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allNews: news?.news,
    },
  };
}

NewsPage.propTypes = {
  allNews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
      _publishedAt: PropTypes.string.isRequired,
    }),
  ),
};

export default NewsPage;
