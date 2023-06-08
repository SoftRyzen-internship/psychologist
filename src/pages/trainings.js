import Head from 'next/head';

import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { imgPaths } from '@/utils/imgPaths';
import PublicSpeakingView from '@/views/Trainings/PublicSpeaking/PublicSpeakingView';
import ConflictologyView from '@/views/Trainings/Conflictology/ConflictologyView';

const TrainingsPage = ({
  conflictology,
  // educationWithLove,
  publicSpeaking,
  // selfHelp,
  // stressResistance,
  // strongSides,
  // timeManagement,
}) => {
  // console.log(path.join(__dirname, '..', '..', 'src', 'content'));
  // console.log(__dirname);

  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Тренінги та майстер-класи</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PublicSpeakingView markdown={publicSpeaking} />
      <ConflictologyView
        markdown={conflictology}
        imgPath={imgPaths.TRAININGS.CONFLICTOLOGY.IMAGE}
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
