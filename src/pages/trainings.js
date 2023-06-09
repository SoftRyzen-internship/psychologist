import Head from 'next/head';

import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { imgPaths } from '@/utils/imgPaths';
import PublicSpeakingView from '@/views/Trainings/PublicSpeaking/PublicSpeakingView';
import ConflictologyView from '@/views/Trainings/Conflictology/ConflictologyView';
import StressResistanceView from '@/views/Trainings/StressResistance/StressResistance';
import SelfHelpView from '@/views/Trainings/SelfHelp/SelfHelpView';
import EducationWithLoveView from '@/views/Trainings/EducationWithLove/EducationWithLoveView';
import TimeManagementView from '@/views/Trainings/TimeManagement/TimeManagementView';
import StrongSidesView from '@/views/Trainings/StrongSides/StrongSidesView';

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
        imgPath={imgPaths.TRAININGS.HERO.IMAGE}
      />
      <ConflictologyView
        markdown={conflictology}
        imgPath={imgPaths.TRAININGS.CONFLICTOLOGY.IMAGE}
      />
      <StressResistanceView
        markdown={stressResistance}
        imgPath={imgPaths.TRAININGS.STRESSRESISTANCE.IMAGE}
      />
      <SelfHelpView
        markdown={selfHelp}
        imgPath={imgPaths.TRAININGS.SELFHELP.IMAGE}
      />
      <EducationWithLoveView
        markdown={educationWithLove}
        imgPath={imgPaths.TRAININGS.EDUCATIONWITHLOVE.IMAGE}
      />
      <TimeManagementView
        markdown={timeManagement}
        imgPath={imgPaths.TRAININGS.TIMEMANAGEMENT.IMAGE}
      />
      <StrongSidesView
        markdown={strongSides}
        imgPath={imgPaths.TRAININGS.STRONGSIDES.IMAGE}
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
