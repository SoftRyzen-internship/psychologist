import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import {
<<<<<<< HEAD
  FixedSocials,
  HomeHero,
  Consult,
  HomeNews,
  StudyView,
=======
  HomeHero,
  Consult,
  Requests,
  StudyView,
  HomeTrainings,
>>>>>>> c4331cb744eb96dd0ccdc3e524122db90b54d44e
  WhatIDo,
} from '@/views';
import { getNewsList } from '@/lib/request';
import PropTypes from 'prop-types';

<<<<<<< HEAD
export default function Home({ hero, allNews, whatIDo, study }) {
=======
export default function Home({
  hero,
  whatIDo,
  study,
  requests,
  blue,
  trainings,
}) {
>>>>>>> c4331cb744eb96dd0ccdc3e524122db90b54d44e
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Головна</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HomeHero hero={hero} />

      <WhatIDo whatIDo={whatIDo} />

      <Consult />

      <Requests requests={requests} mysection={blue} />

      <HomeTrainings trainings={trainings} />

      <StudyView study={study} />

      <StudyView study={study} />

      <HomeNews allNews={allNews} />

      <FixedSocials />
    </>
  );
}

export async function getStaticProps() {
  const { allNews } = await getNewsList();
  const { HOME } = folderPaths;
  const homeData = getData(HOME);
  const { hero, whatIDo, study, requests, blue, trainings } = homeData;

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
      requests,
      blue,
      trainings,
    },
  };
}

Home.propTypes = {
  hero: PropTypes.object.isRequired,
  whatIDo: PropTypes.object.isRequired,
  study: PropTypes.object.isRequired,
<<<<<<< HEAD
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
=======
  requests: PropTypes.object.isRequired,
  blue: PropTypes.object.isRequired,
  trainings: PropTypes.object.isRequired,
>>>>>>> c4331cb744eb96dd0ccdc3e524122db90b54d44e
};
