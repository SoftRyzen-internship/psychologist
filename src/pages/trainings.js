import PropTypes from 'prop-types';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { PublicSpeakingView } from '@/views';
import { imgProperties } from '@/utils/imgProperties';
import dynamic from 'next/dynamic';

const DynamicConflictologyView = dynamic(() =>
  import('@/views').then(mod => mod.ConflictologyView),
);
const DynamicEducationWithLoveView = dynamic(() =>
  import('@/views').then(mod => mod.EducationWithLoveView),
);
const DynamicSelfHelpView = dynamic(() =>
  import('@/views').then(mod => mod.SelfHelpView),
);
const DynamicStressResistanceView = dynamic(() =>
  import('@/views').then(mod => mod.StressResistanceView),
);
const DynamicStrongSidesView = dynamic(() =>
  import('@/views').then(mod => mod.StrongSidesView),
);
const DynamicTimeManagementView = dynamic(() =>
  import('@/views').then(mod => mod.TimeManagementView),
);

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
      <DynamicConflictologyView
        markdown={conflictology}
        img={imgProperties.TRAININGS.CONFLICTOLOGY.IMAGE}
        isDesktop={isDesktop}
      />
      <DynamicStressResistanceView
        markdown={stressResistance}
        img={imgProperties.TRAININGS.STRESSRESISTANCE.IMAGE}
        isDesktop={isDesktop}
      />
      <DynamicSelfHelpView
        markdown={selfHelp}
        img={imgProperties.TRAININGS.SELFHELP.IMAGE}
        isDesktop={isDesktop}
      />
      <DynamicEducationWithLoveView
        markdown={educationWithLove}
        img={imgProperties.TRAININGS.EDUCATIONWITHLOVE.IMAGE}
        isDesktop={isDesktop}
      />
      <DynamicTimeManagementView
        markdown={timeManagement}
        img={imgProperties.TRAININGS.TIMEMANAGEMENT.IMAGE}
        isDesktop={isDesktop}
      />
      <DynamicStrongSidesView
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

TrainingsPage.propTypes = {
  conflictology: PropTypes.object.isRequired,
  educationWithLove: PropTypes.object.isRequired,
  publicSpeaking: PropTypes.object.isRequired,
  selfHelp: PropTypes.object.isRequired,
  stressResistance: PropTypes.object.isRequired,
  strongSides: PropTypes.object.isRequired,
  timeManagement: PropTypes.object.isRequired,
};

export default TrainingsPage;
