import Head from 'next/head';

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
      />
      <ConflictologyView
        markdown={conflictology}
        img={imgProperties.TRAININGS.CONFLICTOLOGY.IMAGE}
      />
      <StressResistanceView
        markdown={stressResistance}
        img={imgProperties.TRAININGS.STRESSRESISTANCE.IMAGE}
      />
      <SelfHelpView
        markdown={selfHelp}
        img={imgProperties.TRAININGS.SELFHELP.IMAGE}
      />
      <EducationWithLoveView
        markdown={educationWithLove}
        img={imgProperties.TRAININGS.EDUCATIONWITHLOVE.IMAGE}
      />
      <TimeManagementView
        markdown={timeManagement}
        img={imgProperties.TRAININGS.TIMEMANAGEMENT.IMAGE}
      />
      <StrongSidesView
        markdown={strongSides}
        img={imgProperties.TRAININGS.STRONGSIDES.IMAGE}
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
