import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/foldersPath';
const TrainingsPage = ({
  // conflictology,
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

      <div>
        <ReactMarkdown className="sectionTitleH1">
          {publicSpeaking.heading}
        </ReactMarkdown>
        <ReactMarkdown>{publicSpeaking.list[0].content}</ReactMarkdown>
        {/* <ReactMarkdown>{online.list}</ReactMarkdown>
        <ReactMarkdown>{online.description}</ReactMarkdown> */}

        {/* <ul style={{ display: 'flex' }}>
          {individual.list.map(({ id, content }) => {
            return (
              <li key={id}>
                <ReactMarkdown>{content}</ReactMarkdown>
              </li>
            );
          })}
        </ul>

        <h2>CARDS</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {factors.cards.map(({ title, content }, index) => (
            <li key={index}>
              <h3>{title}</h3>
              <span>
                <ReactMarkdown>{content}</ReactMarkdown>
              </span>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const trainings = getData(folderPaths.TRAININGS);
  // console.log(trainings);
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
