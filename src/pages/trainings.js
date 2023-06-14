import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import {
  PublicSpeakingView,
  ConflictologyView,
  EducationWithLoveView,
  SelfHelpView,
  StressResistanceView,
  StrongSidesView,
  TimeManagementView,
} from '@/views';
import { imgProperties } from '@/utils/imgProperties';

const TrainingsPage = ({
  conflictology,
  educationWithLove,
  publicSpeaking,
  selfHelp,
  stressResistance,
  strongSides,
  timeManagement,
}) => {
  const isDesktopSize = useMediaQuery({ query: '(min-width: 1280px)' });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(isDesktopSize);
  }, [isDesktopSize]);

  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Тренінги та майстер-класи</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PublicSpeakingView
        markdown={publicSpeaking}
        img={imgProperties.TRAININGS.HERO.IMAGE}
        bgrImg={imgProperties.TRAININGS.HERO.BACKGROUND}
        isDesktop={isDesktop}
      />
      <ConflictologyView
        markdown={conflictology}
        img={imgProperties.TRAININGS.CONFLICTOLOGY.IMAGE}
        isDesktop={isDesktop}
      />
      <StressResistanceView
        markdown={stressResistance}
        img={imgProperties.TRAININGS.STRESSRESISTANCE.IMAGE}
        isDesktop={isDesktop}
      />
      <SelfHelpView
        markdown={selfHelp}
        img={imgProperties.TRAININGS.SELFHELP.IMAGE}
        isDesktop={isDesktop}
      />
      <EducationWithLoveView
        markdown={educationWithLove}
        img={imgProperties.TRAININGS.EDUCATIONWITHLOVE.IMAGE}
        isDesktop={isDesktop}
      />
      <TimeManagementView
        markdown={timeManagement}
        img={imgProperties.TRAININGS.TIMEMANAGEMENT.IMAGE}
        isDesktop={isDesktop}
      />
      <StrongSidesView
        markdown={strongSides}
        img={imgProperties.TRAININGS.STRONGSIDES.IMAGE}
        isDesktop={isDesktop}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const trainings = getData(folderPaths.TRAININGS);
  const {
    conflictology,
    educationWithLove,
    publicSpeaking,
    selfHelp,
    stressResistance,
    strongSides,
    timeManagement,
  } = trainings;

  return {
    props: {
      conflictology,
      educationWithLove,
      publicSpeaking,
      selfHelp,
      stressResistance,
      strongSides,
      timeManagement,
    },
  };
};

export default TrainingsPage;
