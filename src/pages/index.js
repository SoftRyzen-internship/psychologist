import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { HomeHero, Consult, StudyView, WhatIDo } from '@/views';
import { getNewsList } from '@/lib/request';
import PropTypes from 'prop-types';

export default function Home({ hero, whatIDo, study }) {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Головна</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main">
        <HomeHero hero={hero} />

        <WhatIDo whatIDo={whatIDo} />

        <Consult />

        <StudyView study={study} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { allNews } = await getNewsList();
  const { HOME } = folderPaths;
  const homeData = getData(HOME);
  const { hero, whatIDo, study } = homeData;

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
      whatIDo,
      study,
    },
  };
}

Home.propTypes = {
  hero: PropTypes.object.isRequired,
  whatIDo: PropTypes.object.isRequired,
  study: PropTypes.object.isRequired,
};
