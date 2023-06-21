import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import {
  HomeHero,
  Consult,
  Requests,
  StudyView,
  HomeTrainings,
  WhatIDo,
  ReusableBlueView,
} from '@/views';
import { getNewsList } from '@/lib/request';
import PropTypes from 'prop-types';

export default function Home({
  hero,
  whatIDo,
  study,
  requests,
  blue,
  trainings,
}) {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Головна</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HomeHero hero={hero} />

      <WhatIDo whatIDo={whatIDo} />

      <Consult />

      <Requests requests={requests} />

      <ReusableBlueView
        data={blue}
        className={{ section: 'mainPageSection', div: 'containerX' }}
      />

      <HomeTrainings trainings={trainings} />

      <StudyView study={study} />
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
  requests: PropTypes.object.isRequired,
  blue: PropTypes.object.isRequired,
  trainings: PropTypes.object.isRequired,
};
