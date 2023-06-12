import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { HomeHero } from '@/views';
import { getNewsList } from '@/lib/request';
// import { ActionButton } from '@/components';
import { MainFixedSocials } from '@/components';

export default function Home({ hero }) {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Головна</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main">
        <HomeHero hero={hero} />
        {/* <FirstView />
        <ActionButton /> */}
        <MainFixedSocials />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { allNews } = await getNewsList();
  const { HOME } = folderPaths;
  const homeData = getData(HOME);
  const { hero } = homeData;
  if (!allNews) {
    return {
      notFound: true,
    };
  }
  if (!homeData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allNews,
      hero,
    },
  };
}
